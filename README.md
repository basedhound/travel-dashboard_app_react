<div align="center">
  <br />
    <a href="https://tourvisto-fv.vercel.app" target="_blank">
      <img src="public/assets/images/readme.png" alt="Project Banner">
    </a>
  <br />
  <div>
    <img alt="Static Badge" src="https://img.shields.io/badge/React-4c84f3?style=for-the-badge&logo=react&logoColor=white">
    <img alt="Static Badge" src="https://img.shields.io/badge/Appwrite-f05695?style=for-the-badge&logo=appwrite&logoColor=white">
    <img alt="Static Badge" src="https://img.shields.io/badge/Syncfusion-181758?style=for-the-badge&logoColor=white">
    <img src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  </div>
  <h3 align="center">Travel Agency Platform (Dashboard)</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. ✨ [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 📝 [Features](#features)
4. 🚀 [Quick Start](#quick-start)

## <a name="introduction">✨ Introduction</a>

**`[EN]`** A modern travel agency platform with an admin dashboard and public site. Generate AI-powered trip itineraries based on country, travel style, interests, group type, and budget.

**`[FR]`** Une plateforme moderne d'agence de voyage avec un tableau de bord administrateur et un site public. Générez des itinéraires de voyage alimentés par l'IA en fonction du pays, du style de voyage, des centres d’intérêt, du type de groupe et du budget.


## <a name="tech-stack">⚙️ Tech Stack</a>

- **[Appwrite](https://appwrite.io/)** is an open-source backend-as-a-service platform that offers features like authentication, databases, and storage, simplifying backend development for web and mobile applications. 

- **[Google Gemini API](https://developers.google.com/gemini)** is Google's generative AI platform, providing advanced models capable of understanding and generating text, images, audio, and video, integrated into various Google services. 

- **[React 19](https://reactjs.org/)** is the latest version of the popular JavaScript library for building user interfaces, introducing features like Server Components, the `use` hook for asynchronous data, and enhanced form handling. 

- **[React Router v7](https://remix.run/blog/react-router-v7)** is a routing library for React applications that brings features from Remix back into React Router, offering improved type safety, server rendering, and bundle splitting. 

- **[Stripe](https://stripe.com/)** is a financial services and software company that provides payment processing solutions for online and in-person transactions, offering APIs for payments, billing, and fraud prevention. 

- **[Syncfusion](https://www.syncfusion.com/)** offers a comprehensive suite of UI components and frameworks for building web, mobile, and desktop applications, supporting platforms like .NET, JavaScript, Angular, React, and Vue.

- **[Tailwind CSS](https://tailwindcss.com/)** is a utility-first CSS framework that enables developers to build custom user interfaces rapidly by applying predefined utility classes directly in HTML. 

- **[TypeScript](https://www.typescriptlang.org/)** is a statically typed superset of JavaScript developed by Microsoft, enhancing code quality and maintainability by adding optional type annotations. 

- **[Vite](https://vitejs.dev/)** is a modern build tool and development server for web projects, offering fast startup times and hot module replacement by leveraging native ES modules in the browser.

If you need further information or assistance with any of these technologies, feel free to ask! 


## <a name="features">📝 Features</a>


👉 AI-powered trip itinerary generator

👉 Trip booking functionality on the public website

👉 Admin dashboard with trip and user management

👉 User growth metrics and trip analytics

👉 Interactive charts and trip statistics table

👉 Detailed trip overview

👉 Responsive UI with a modern design

👉 Secure user authentication and data management

👉 Modular code architecture with reusable components

and many more, built for scalability and a smooth user experience.

## <a name="quick-start">🚀 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone {git repository link}
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
VITE_SYNCFUSION_LICENSE_KEY=

VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_API_ENDPOINT=
VITE_APPWRITE_API_KEY=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_USERS_COLLECTION_ID=
VITE_APPWRITE_ITINERARY_COLLECTION_ID=

STRIPE_SECRET_KEY=
GEMINI_API_KEY=
UNSPLASH_ACCESS_KEY=
VITE_BASE_URL="http://localhost:5173"
```
Replace the placeholder values with your actual **[Syncfusion](https://jsm.dev/tourvisto-syncfusion)**, **[Appwrite](https://jsm.dev/tourvisto-appwrite)**, **[Gemini AI](https://aistudio.google.com/)**, **[Sentry](https://jsm.dev/tourvisto-sentry)**, **[Stripe](https://stripe.com/)**, and **[Unsplash](https://unsplash.com/)** credentials.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173/) in your browser to view the project.
