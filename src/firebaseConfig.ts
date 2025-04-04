// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCl_aZnpP5V5HUYKFr_R4CB9lDh9X-gdPg",
  authDomain: "sequentiaweb.firebaseapp.com",
  projectId: "sequentiaweb",
  storageBucket: "sequentiaweb.firebasestorage.app",
  messagingSenderId: "532110498847",
  appId: "1:532110498847:web:2b6915f9748b535851c92a",
  measurementId: "G-N6Q7N53R6N"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

logEvent(analytics, 'page_view');  // Ejemplo de evento predeterminado

export { auth, analytics };

