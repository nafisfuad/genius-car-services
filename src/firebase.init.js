// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJAMbXNXwK-W-4EJBXI6tSjGDDhx1k-GM",
    authDomain: "genius-car-services-557d3.firebaseapp.com",
    projectId: "genius-car-services-557d3",
    storageBucket: "genius-car-services-557d3.appspot.com",
    messagingSenderId: "656868125093",
    appId: "1:656868125093:web:a1eadc3a2e3d4d49aa604c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;