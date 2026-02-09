# VariPulse AI - Real-Time Misinformation Detection Platform 🛡️

**VariPulse AI** is a next-generation web platform designed to combat digital misinformation, fraud, and scams. It provides users with a simulated real-time analysis interface to detect fake news, scam messages, and deepfake audio.

Built as part of **Mission 26 (SAIL)**, this project demonstrates a modern, privacy-focused approach to AI-powered security tools.


## 🚀 Features

### 1. Real-Time Detection Hub
- **Text Analysis**: Paste suspicious messages to detect potential scams or phishing attempts.
- **Audio Deepfake Check**: Simulate audio analysis to identify AI-generated voice clones.
- **URL Scanner**: Check news links for credibility and source verification.

### 2. Modern UI/UX
- **Dark/Light Mode**: Fully responsive theming with persistent user preference.
- **Glassmorphism Design**: Sleek, modern aesthetic using backdrop filters and gradients.
- **Interactive Roadmap**: A visual timeline of the project's development phases.
- **Smooth Navigation**: Seamless transitions between Apps, About, and Submission pages.

### 3. Community Engagement
- **Idea Submission Portal**: A structured form for users to contribute new safety concepts.
- **Live Stats**: Dynamic counters for apps in pipeline and development status.


## 🛠️ Technologies Used

### Core Stack
- **HTML5**: Semantic structure for accessibility and SEO.
- **CSS3**: 
  - Custom CSS Variables (`:root`) for consistent theming.
  - Flexbox & CSS Grid for responsive layouts.
  - Advanced styling with `backdrop-filter`, gradients, and transitions.
- **JavaScript (ES6+)**:
  - DOM manipulation for interactive elements.
  - `localStorage` for saving theme preferences.
  - Simulated async/await logic for the "Analyze Now" feature.

### Design Assets
- **Fonts**: `Inter` (UI text) and `Outfit` (Headings) via Google Fonts.
- **Icons**: Inline SVGs for optimized performance and styling control.

## 🧠 How It Works

1.  **The Detection Engine (Simulation)**: 
    - The "Analyze Now" feature uses JavaScript to simulate backend processing. 
    - It mimics API latency with `setTimeout` and displays dynamic results based on user input type.
    
2.  **Theming Engine**:
    - A centralized script checks the user's system preference or saved `localStorage` setting.
    - Toggles a `.dark-mode` or `.light-mode` class on the `<body>` to instantly switch color variables.

3.  **Scalable Architecture**:
    - The codebase is modular, separating content (`.html`), styles (`.css`), and logic (`.js`) for easy maintenance and scalability.


## 📸 Project Structure

```bash
/veripulse-portal
├── index.html          # Main landing page (Apps)
├── about.html          # Project mission & roadmap
├── submit-idea.html    # Engagement form
├── app-detail.html     # The core product demo interface
├── index.css           # Global styles & theming
└── script.js           # Logic including simulation & toggles
```

## 🔮 Future Roadmap

- **Phase 1 (Current)**: Core interface and simulation logic.
- **Phase 2**: Integration with real machine learning models (TensorFlow.js) for browser-based detection.
- **Phase 3**: Browser extension and mobile app development.


## 👨‍💻 Skills Applied

- **Frontend Architecture**: designing scalable file structures.
- **State Management**: Handling UI states (loading, success, tabs) with Vanilla JS.
- **Responsive Design**: Ensuring perfect rendering on Mobile, Tablet, and Desktop.
- **User Experience (UX)**: Prioritizing clarity, feedback, and visual hierarchy.

*Verified by the VariPulse Team*
