<div align="center">

# 🛡️ SafeSpace Africa

### Building Safer Digital Spaces for African Women & Girls

*Empowering African women and girls with the tools, knowledge, and community to navigate the digital world safely and confidently.*

[![Website](https://img.shields.io/badge/Website-safespace-teal?style=for-the-badge)](https://safe-digital-space-africa-five.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/rbett-va/safe-digital-space-africa.git)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

</div>

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Getting Started](#-getting-started)
- [Key Pages & Navigation](#-key-pages--navigation)
- [Development](#-development)
- [Contributors](#-contributors)
- [License](#-license)
- [Contact](#-contact)

---

## 📖 About

**SafeSpace Africa** is a comprehensive digital safety platform designed specifically to address the unique challenges faced by African women and girls in the digital space. Supporting the **16 Days of Activism Against Gender-Based Violence**, our platform provides:

- 🎓 **Interactive Digital Literacy Courses** - Self-paced learning modules with quizzes and certifications
- 🛡️ **Practical Safety Tools** - Password strength checker, email breach detection, and privacy checklists
- 📝 **Encrypted Personal Journal** - A secure, password-protected space for private reflections
- 🆘 **Safety Plan Wizard** - Step-by-step guidance to create personalized digital safety plans
- 💬 **Anonymous Community Forum** - Connect with others in a supportive, judgment-free environment
- 🤖 **24/7 AI Support Assistant** - Instant help and guidance on digital safety topics

### Mission

Our mission is to close the digital safety gap by providing African women with the resources, education, and community support they need to navigate online spaces confidently and securely.

---

## ✨ Features

### 🎓 Interactive Digital Literacy Hub

- **Structured Course Hierarchy**: Organized into Modules → Topics → Subtopics
- **Interactive Quizzes**: Test your knowledge with engaging assessments
- **Progress Tracking**: Visual progress bars and completion tracking
- **Certification System**: Earn certificates upon course completion
- **Self-paced Learning**: Learn at your own speed, anytime, anywhere

### 🔒 Safety Tools

- **Password Strength Checker**: Analyze and improve your password security
- **Email Breach Checker**: Check if your email has been compromised in data breaches
- **Social Media Privacy Checklist**: Step-by-step guide to secure your social accounts
- **Safety Resources**: Curated list of emergency contacts and support organizations

### 📝 Encrypted Journal

- **Client-side Encryption**: Your entries are encrypted locally on your device
- **Password Protection**: Secure access with a personal password
- **Rich Text Editor**: Format your thoughts with a user-friendly editor
- **Private & Confidential**: Your data never leaves your device unencrypted

### 🆘 Safety Plan Wizard

- **Personalized Planning**: Create a custom digital safety plan
- **Emergency Contacts**: Store trusted contacts for quick access
- **Safe Places & Strategies**: Document safe locations and coping mechanisms
- **Downloadable Reports**: Print or save your plan for offline access

### 💬 Community Forum

- **Anonymous Posting**: Share experiences without revealing your identity
- **Supportive Environment**: Connect with others facing similar challenges
- **Engagement Features**: Like, reply, and support community members
- **Moderated Space**: Safe and respectful discussions

### 🤖 AI Support Assistant

- **24/7 Availability**: Get help anytime you need it
- **Instant Responses**: Quick answers to digital safety questions
- **Contextual Guidance**: Personalized advice based on your needs
- **Privacy-Focused**: Conversations are not stored or shared

---

## 🛠️ Technology Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, Radix UI, Lucide Icons |
| **State Management** | React Context API, Local Storage |
| **Routing** | React Router DOM |
| **Forms** | React Hook Form, Zod Validation |
| **Email** | Resend API |
| **AI Integration** | Google Gemini API |
| **Deployment** | Vercel |
| **Version Control** | Git, GitHub |

</div>

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rbett-va/safe-digital-space-africa.git
   cd safe-digital-space-africa
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_RESEND_API_KEY=your_resend_api_key_here
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

The optimized production build will be in the `dist/` directory.

---

## 🗺️ Key Pages & Navigation

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Landing page with platform overview |
| **Courses** | `/courses` | Browse all available digital literacy courses |
| **Course Viewer** | `/courses/:courseId` | Interactive course content with modules and quizzes |
| **Safety Tools** | `/safety-tools` | Access password checker, breach detector, and privacy tools |
| **Safety Plan** | `/safety-plan` | Create and manage your personalized safety plan |
| **Journal** | `/journal` | Encrypted personal journal |
| **Community** | `/community` | Anonymous community forum |
| **AI Assistant** | `/ai-assistant` | Chat with AI support bot |
| **About** | `/about` | Learn more about our mission and team |
| **Contact** | `/contact` | Get in touch with our team |
| **Privacy Policy** | `/privacy` | Our commitment to your privacy |

---

## 💻 Development

### Project Structure

```
safe-digital-space-africa/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/          # Page components
│   ├── contexts/       # React Context providers
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and helpers
│   ├── types/          # TypeScript type definitions
│   └── App.tsx         # Main application component
├── .env                # Environment variables (not committed)
├── package.json        # Project dependencies
└── vite.config.ts      # Vite configuration
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🔄 How to Update

This project is set up for continuous deployment with Vercel.

1.  **Make changes** to your code locally.
2.  **Commit** your changes:
    ```bash
    git add .
    git commit -m "Description of changes"
    ```
3.  **Push** to the main branch:
    ```bash
    git push origin main
    ```
4.  Vercel will automatically detect the push and build the new version.

## 🛠️ Build Commands

If you need to build locally to test before pushing:

```bash
npm run build
# or
bun run build
```

To preview the production build locally:

```bash
npm run preview
# or
bun run preview
```


---

## 👥 Contributors

<div align="center">

| Name | Role | Location | Email |
|------|------|----------|-------|
| **Reuben Bett** | Lead Developer | bett.devop@gmail.com |
| **Christine Mirimba** | AI Specialist | mirimbachristine@gmail.com |

</div>

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

- **Website**: [https://safe-digital-space-africa-five.vercel.app/](https://safe-digital-space-africa-five.vercel.app/)
- **GitHub**: [https://github.com/rbett-va/safe-digital-space-africa.git](https://github.com/rbett-va/safe-digital-space-africa.git)
- **Pitch Deck**: [View on Canva](https://www.canva.com/design/DAG6A9LZsFY/IekQmhD0cskxexSc5X29cg/edit?utm_content=DAG6A9LZsFY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

---

## 🙏 Acknowledgments

- **16 Days of Activism Against Gender-Based Violence** - Our inspiration and commitment
- **African Women in Tech Community** - For support and feedback
- **Open Source Contributors** - For the amazing tools and libraries
- **All the brave women and girls** who shared their stories to help us build this platform

---

## 🔮 Roadmap

### Upcoming Features

- [ ] 🌍 Multi-language support (French, Swahili, Arabic, Portuguese)
- [ ] 🤖 AI-powered threat detection and alerts
- [ ] 📱 Mobile application (iOS & Android)
- [ ] 📴 Offline mode for areas with limited connectivity
- [ ] 🎥 Video-based learning modules
- [ ] 🏆 Gamification and achievement system
- [ ] 🔗 Integration with local support organizations
- [ ] 📊 Analytics dashboard for tracking community impact

---

<div align="center">

### 💜 Made with Love for African Women and Girls

**Together, we build safer digital spaces.**

[![Star this repo](https://img.shields.io/github/stars/rbett-va/safe-digital-space-africa?style=social)](https://github.com/rbett-va/safe-digital-space-africa.git)
[![Follow on GitHub](https://img.shields.io/github/followers/rbett-va?style=social)](https://github.com/rbett-va)

---

*© 2025 SafeSpace Africa. All rights reserved.*

</div>
