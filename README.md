# 💍 Interactive Proposal Website

A fun and interactive proposal website built with React, Vite, and modern web technologies. This website features an engaging proposal experience with animations, confetti effects, and interactive buttons.

## ✨ Features

- **Interactive Buttons**: "Yes 💖" and "No 😢" buttons with hover and tap animations
- **Dynamic Sizing**: The "Yes" button grows larger each time "No" is clicked
- **Smart Disappearing**: The "No" button disappears after 9 clicks
- **Celebration Mode**: When "Yes" is clicked, the screen fills with celebration text and confetti
- **Beautiful Design**: Pink gradients and rounded buttons using TailwindCSS
- **Smooth Animations**: Powered by Framer Motion for delightful user interactions
- **Responsive Design**: Works perfectly on desktop and mobile devices

## 🚀 Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework for styling
- **Framer Motion** - Production-ready motion library for React
- **Canvas Confetti** - Beautiful confetti animation library
- **Google Fonts** - Dancing Script font for elegant typography

## 📦 Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd proposal-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## 🎮 How to Use

1. **Initial State**: You'll see the proposal question "Will you marry me? 💍" with two buttons
2. **Interactive Experience**: 
   - Click "No 😢" to see the "Yes 💖" button grow larger
   - After 9 "No" clicks, the "No" button disappears
   - Click "Yes 💖" to trigger the celebration mode
3. **Celebration**: Enjoy the confetti animation and celebration message!

## 🛠️ Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎨 Customization

You can easily customize the website by modifying:

- **Colors**: Update the TailwindCSS classes in `src/App.jsx`
- **Text**: Change the proposal text and celebration messages
- **Animations**: Adjust Framer Motion properties for different effects
- **Confetti**: Modify the confetti configuration in the `handleYesClick` function

## 📱 Browser Support

This website works on all modern browsers that support:
- ES6+ JavaScript
- CSS Grid and Flexbox
- CSS Custom Properties

## 🎉 Enjoy!

This is a fun and interactive way to make a special proposal. The website is designed to be both entertaining and meaningful, creating a memorable experience for both parties involved.

---

Made with ❤️ using React + Vite + TailwindCSS + Framer Motion
