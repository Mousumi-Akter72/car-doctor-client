// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQi28o9q3i-pC9wFHdro4OPGBu6OR9u3k",
  authDomain: "cars-doctor-bc548.firebaseapp.com",
  projectId: "cars-doctor-bc548",
  storageBucket: "cars-doctor-bc548.appspot.com",
  messagingSenderId: "422551439876",
  appId: "1:422551439876:web:6ca49a163618d82120c351"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;