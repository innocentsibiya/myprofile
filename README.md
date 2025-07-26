# 🧠 My Profile – Resume Website (Built with Angular & TypeScript)

Welcome! This is a personal **resume website** built with **Angular** and **TypeScript**, designed to showcase both my professional background and my frontend development skills. It is deployed on **GitHub Pages** via the [`innocentsibiya/myprofile`](https://github.com/innocentsibiya/myprofile) repository.

🙋‍♂️ About Me
I'm a developer passionate about clean, scalable code and modern web technologies. This resume site is more than a portfolio—it's a working example of what I can do with Angular and TypeScript.

## 🌟 Purpose

This project serves two main goals:

1. **Present my resume as a responsive, interactive website**
2. **Demonstrate my skills with Angular and TypeScript** through a real-world application

## 🚀 Live Demo

🖥️ [View My Resume Website on GitHub Pages](https://innocentsibiya.github.io/myprofile/)

## 🛠️ Built With

- **Angular** – Component-based frontend framework
- **TypeScript** – Typed superset of JavaScript for safer code
- **SCSS/CSS** – For styling and layout
- **Angular CLI** – For scaffolding, building, and testing
- **GitHub Pages** – For free static hosting

## 📁 Project Structure

```bash
/
├── src/                  # Angular app source code
│   ├── app/              # Components, services, models
│   ├── assets/           # Images, fonts, etc.
│   └── index.html        # Root HTML
├── angular.json          # Angular workspace configuration
├── tsconfig.json         # TypeScript config
├── package.json          # Project metadata and dependencies
├── docs/                 # Compiled app output for GitHub Pages
└── README.md             # This file

🧪 Run Locally
To set up and run the project locally:
git clone https://github.com/innocentsibiya/myprofile.git
cd myprofile
npm install
ng serve
Then open http://localhost:4200 in your browser.

🚀 Deploying to GitHub Pages
This project uses the docs/ folder method for GitHub Pages. To deploy:

Build the app with the --output-path set to docs and --base-href set to your repo name:
ng build --output-path docs --base-href /myprofile/
Commit and push the changes:
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
Go to your repo settings on GitHub:

Navigate to Settings > Pages

Set the source to Deploy from a branch

Choose branch: main and folder: /docs

Save

GitHub Pages will now serve your Angular app from https://innocentsibiya.github.io/myprofile/

Thank you for visiting! If you have any feedback or suggestions, feel free to open an issue or connect with me.