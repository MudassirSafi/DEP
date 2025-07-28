# Muhammad Mudassir - Professional Portfolio Website

A modern, responsive portfolio website built with React.js and Tailwind CSS, showcasing my skills, experience, and projects as a Software Engineer.

## 🌟 Features

- **Fully Responsive Design** - Optimized for all devices (desktop, tablet, mobile)
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Components** - Dynamic project showcase, skills visualization, and contact form
- **Fast Performance** - Optimized loading times and smooth scrolling
- **SEO Friendly** - Structured content for better search engine visibility
- **Accessibility** - WCAG compliant with proper ARIA labels and keyboard navigation

## 🚀 Technologies Used

- **Frontend Framework**: React.js (v19.1.0)
- **Styling**: Tailwind CSS (v4.1.11)
- **Build Tool**: Create React App
- **Icons**: Custom SVG icons and emojis
- **Fonts**: Inter font family from Google Fonts
- **Animations**: CSS transitions and Tailwind animations

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher) or yarn

## 🛠️ Installation & Setup

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

## 📝 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
The page will reload when you make changes.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`
Launches the test runner in the interactive watch mode.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`. You can modify the primary colors:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... more shades
    900: '#1e3a8a',
  },
}
```

### Content
Update the personal information in each component:

- **Personal Info**: Update in `src/components/Hero.js`, `src/components/About.js`, and `src/components/Contact.js`
- **Skills**: Modify the skills array in `src/components/Skills.js`
- **Experience**: Update work experience in `src/components/Experience.js`
- **Projects**: Add/modify projects in `src/components/Projects.js`
- **Education**: Update educational background in `src/components/Education.js`

### Styling
- Global styles are defined in `src/index.css`
- Component-specific styles use Tailwind CSS classes
- Custom animations are defined in the Tailwind config

## 📱 Responsive Design

The website is fully responsive and tested on:

- **Desktop**: 1920px and above
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🔧 Configuration Files

- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `package.json` - Project dependencies and scripts

## 📂 Project Structure

```
portfolio-website/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Experience.js
│   │   ├── Projects.js
│   │   ├── Education.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Set up continuous deployment with your Git repository

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio-website",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## 📧 Contact Information

- **Email**: muhammedmudassir40@gmail.com
- **Phone**: 03209820283
- **Location**: Ghocia Chowk, Rawalpindi

## 🤝 Contributing

This is a personal portfolio project, but if you find any bugs or have suggestions for improvements, feel free to:

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **React.js** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Google Fonts** - For the Inter font family
- **Create React App** - For the initial project setup

---

**Built with ❤️ by Muhammad Mudassir**
