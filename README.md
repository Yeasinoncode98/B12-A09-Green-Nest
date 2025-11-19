# 🌿 Green Nest: Elegant Plant Care & Store Platform

**Green Nest** is an elegant and responsive Single Page Application (SPA) built with **React**, focusing on flowers and plant care. It provides a visually appealing, minimalist interface for browsing plants, reading essential care tips, and managing user authentication for accessing exclusive details and services.

## 🔗 Project Links

| Resource | Link |
| :--- | :--- |
| **Live Demo (Netlify)** | 👉 **[(Netlify/](https://calm-halva-e2b0a7.netlify.app/))** |
| **GitHub Repository** | 💻 **[Yeasinoncode98/B12-A09-Green-Nest](https://github.com/Yeasinoncode98/B12-A09-Green-Nest)** |
| **Author** | 👤 **[Yeasinoncode98 (Yeasin Arafat)](https://github.com/Yeasinoncode98)** |

---

## 🎯 Project Goals

The development of Green Nest was guided by the following objectives:

* Build a **responsive, visually appealing** plant care and store platform with a **calm and minimalist design**.
* Implement secure **Firebase authentication** (Signup, Login, Google Sign-In, Forgot Password).
* Fetch and display plant and service data from **local JSON files**.
* Create **protected routes** to restrict access to sensitive service details (e.g., specific plant details or expert consultations).
* Maintain full **SPA functionality** for a smooth user experience.

---

## 🚀 Key Features

* **Home Page:** Features a hero section, a **top-rated plants slider (Swiper)**, quick plant care tips, and a scrolling marquee with key information.
* **Plants Page:** A dedicated page to **browse all available plants** with detailed product cards.
* **Plant Details Page:** A **protected route** allowing logged-in users to view large images, full descriptions, pricing, rating, and current stock information.
* **Robust Authentication:** Full suite of authentication features including **Signup, Login, Google Sign-In, and Forgot Password** using **Firebase Auth**.
* **Profile Management:** Functionality for users to manage their profile and sessions.
* **Interactive UI:** Utilizes **Framer Motion** for smooth, elegant animations, hover effects, and a highly responsive design.

---

## 🛠️ Technologies Used

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Core** | **React** | The main library for building the UI. |
| **Routing** | **React Router DOM** | Managing client-side navigation and implementing protected routes. |
| **Authentication** | **Firebase** | Providing secure backend authentication and user management services. |
| **Styling** | **Tailwind CSS & DaisyUI** | Utility-first CSS framework for custom styling and pre-built UI components. |
| **Animation** | **Framer Motion** | Creating smooth, production-ready animations and motion effects. |
| **UI Components** | **Swiper, React Fast Marquee** | Handling image carousels/sliders and dynamic scrolling text. |
| **Notifications** | **React Toastify, React Hot Toast** | Providing non-blocking, user-friendly feedback messages. |

---

## 📂 Project Structure

The project follows a standard, scalable React architecture:

##

 ```
GreenNest/
├─ public/
│  └─ plants.json         # Plant data
├─ src/
│  ├─ Components/         # Reusable UI components
│  ├─ Context/            # Firebase authentication context
│  ├─ Layout/             # Main layout for routes
│  ├─ Pages/              # Individual pages (Home, Plants, PlantDetails, etc.)
│  ├─ assets/             # Images and media
│  └─ App.jsx             # Main app component with routes
├─ package.json           # Project dependencies
├─ tailwind.config.js     # Tailwind configuration
└─ README.md              # Project documentation

```



---

## 🚀 Features

- **Home Page:**  
  Displays hero section, top-rated plants slider, plant care tips, and expert profiles.  

- **Plants Page:**  
  Browse all available plants with detailed cards.  

- **Plant Details Page:**  
  View large images, full description, price, rating, and available stock. Protected route.  

- **Authentication:**  
  Signup, Login, Google Sign-In, Forgot Password, and profile management.  

- **Responsive & Interactive UI:**  
  Smooth animations, hover effects, sliders, and SPA experience.  

---

---

## ⬇️ Local Setup and Installation Guide

Follow these steps precisely to get a local copy of the **Green Nest** application running on your machine.

### Prerequisites

* **Node.js** (v14+ recommended)
* **npm** (Node Package Manager)
* **Git** (for cloning the repository)

### Step-by-Step Instructions

1.  **Clone the Repository**

    Open your terminal and execute the commands to clone the project:

    ```bash
    git clone [https://github.com/Yeasinoncode98/B12-A09-Green-Nest.git](https://github.com/Yeasinoncode98/B12-A09-Green-Nest.git)
    cd B12-A09-Green-Nest
    ```

2.  **Install Dependencies**

    Install all required packages from `package.json`:

    ```bash
    npm install
    ```

3.  **Configure Firebase Environment Variables**

    For the Firebase Authentication to work, you must set up your own Firebase project and include your credentials. Create a file named **`.env`** in the root directory and add your keys (replace the placeholders with your actual values):

    ```
    # Example .env structure - These names may vary slightly based on your build tool (e.g., VITE_)
    REACT_APP_FIREBASE_API_KEY="YOUR_API_KEY"
    REACT_APP_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
    REACT_APP_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
    REACT_APP_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
    REACT_APP_FIREBASE_APP_ID="YOUR_APP_ID"
    ```

4.  **Start the Development Server**

    Launch the application locally:

    ```bash
    npm start
    # OR if your project uses a modern setup like Vite:
    # npm run dev
    ```

5.  **View the App**

    Open your web browser and navigate to the local URL provided by the terminal (typically `http://localhost:3000/`).
