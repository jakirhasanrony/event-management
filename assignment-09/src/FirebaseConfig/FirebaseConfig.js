import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCeITxcj7EPrsakCU6TYM5wNvWMjq3653I",
  authDomain: "assignment-09-74610.firebaseapp.com",
  projectId: "assignment-09-74610",
  storageBucket: "assignment-09-74610.appspot.com",
  messagingSenderId: "491610024797",
  appId: "1:491610024797:web:42b2721a64c2a5975a16b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;