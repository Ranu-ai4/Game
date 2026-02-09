document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeBtns = document.querySelectorAll('.theme-btn-new');
    const body = document.body;

    // Check for saved theme preference
    let savedTheme = 'dark-mode';
    try {
        savedTheme = localStorage.getItem('theme') || 'dark-mode';
    } catch (e) {
        console.warn('LocalStorage access denied', e);
    }

    body.className = savedTheme;
    updateThemeIcons(savedTheme);

    if (themeBtns.length > 0) {
        console.log('Found theme buttons:', themeBtns.length);
        themeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                console.log('Theme button clicked');
                const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
                const newTheme = currentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';

                body.className = newTheme;
                try {
                    localStorage.setItem('theme', newTheme);
                } catch (e) {
                    console.warn('LocalStorage write failed', e);
                }
                updateThemeIcons(newTheme);
            });
        });
    } else {
        console.error('No theme buttons found');
    }

    function updateThemeIcons(theme) {
        const moonIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
        const sunIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>';

        themeBtns.forEach(btn => {
            const iconContainer = btn.querySelector('.theme-icon-container');
            if (iconContainer) {
                iconContainer.innerHTML = theme === 'dark-mode' ? moonIcon : sunIcon;
            }
        });
    }

    // FAQ Toggle Logic
    const faqButtons = document.querySelectorAll('.faq-btn');
    faqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const box = btn.closest('.faq-box');
            const content = box.querySelector('.faq-content');
            const icon = btn.querySelector('svg');

            if (!content) return;

            const isOpen = box.classList.contains('active');

            if (isOpen) {
                box.classList.remove('active');
                content.style.display = 'none';
                if (icon) icon.style.transform = 'rotate(0deg)';
            } else {
                box.classList.add('active');
                content.style.display = 'block';
                if (icon) icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    // Ensure all FAQs are closed by default
    document.querySelectorAll('.faq-content').forEach(c => {
        c.style.display = 'none';
    });

    // Scroll Reveal Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .cap-card, .metric-card, .sim-card').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // --- Real-Time Demo Checker Logic ---
    const demoTabs = document.querySelectorAll('.demo-tab');
    const demoPanes = document.querySelectorAll('.demo-pane');
    const analyzeBtn = document.getElementById('analyze-btn');
    const demoResult = document.getElementById('demo-result');

    if (demoTabs.length > 0 && analyzeBtn) {
        // Tab Switching
        demoTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all
                demoTabs.forEach(t => t.classList.remove('active'));
                demoPanes.forEach(p => p.classList.remove('active'));

                // Add active to current
                tab.classList.add('active');
                const targetId = `pane-${tab.dataset.tab}`;
                document.getElementById(targetId).classList.add('active');

                // Hide result when switching tabs
                if (demoResult) demoResult.style.display = 'none';
            });
        });

        // Analyze Button Logic
        analyzeBtn.addEventListener('click', () => {
            const activeTab = document.querySelector('.demo-tab.active').dataset.tab;
            const btnText = analyzeBtn.querySelector('.btn-text');
            const loader = analyzeBtn.querySelector('.loader');

            // Show Loading State
            btnText.textContent = 'Analyzing...';
            // loader.style.display = 'block'; // If you add a loader CSS
            analyzeBtn.disabled = true;
            if (demoResult) demoResult.style.display = 'none';

            // Simulate Delay
            setTimeout(() => {
                btnText.textContent = 'Analyze Now';
                analyzeBtn.disabled = false;
                if (demoResult) {
                    demoResult.style.display = 'block';
                    let resultHTML = '';

                    if (activeTab === 'text') {
                        resultHTML = `
                            <div class="result-header">
                                <span class="result-status">🔴 Fake Message Detected</span>
                                <span class="trust-score">Trust Score: 22%</span>
                            </div>
                            <p class="result-reason"><strong>Reason:</strong> Contains scam keywords and suspicious link pattern commonly associated with phishing attacks.</p>
                            <p class="result-reason" style="margin-top:0.5rem; color: #dc2626;"><strong>Suggestion:</strong> Do not click unknown links. Report as spam.</p>
                        `;
                        demoResult.className = 'demo-result'; // default red
                    } else if (activeTab === 'audio') {
                        resultHTML = `
                            <div class="result-header">
                                <span class="result-status">🔴 Possible Scam Call</span>
                                <span class="trust-score">Trust Score: 15%</span>
                            </div>
                            <p class="result-reason"><strong>Reason:</strong> Urgent payment request pattern and synthetic voice artifacts detected.</p>
                            <p class="result-reason" style="margin-top:0.5rem; color: #dc2626;"><strong>Suggestion:</strong> Hang up immediately. Do not share personal info.</p>
                        `;
                        demoResult.className = 'demo-result';
                    } else if (activeTab === 'url') {
                        resultHTML = `
                            <div class="result-header">
                                <span class="result-status" style="color: #d97706;">🟡 Suspicious Content</span>
                                <span class="trust-score">Trust Score: 55%</span>
                            </div>
                            <p class="result-reason"><strong>Reason:</strong> Low source credibility and misleading claim indicators found in metadata.</p>
                            <p class="result-reason" style="margin-top:0.5rem; color: #d97706;"><strong>Suggestion:</strong> Verify with trusted news sources before sharing.</p>
                        `;
                        demoResult.className = 'demo-result warning';
                    }
                    demoResult.innerHTML = resultHTML;
                }
            }, 1500); // 1.5s delay
        });
    }
});
