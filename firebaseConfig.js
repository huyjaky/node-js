// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeORzxCouL7h09AJWvMCuAEc9IlcEFGyE",
  authDomain: "kynangmem-server.firebaseapp.com",
  databaseURL: "https://kynangmem-server-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kynangmem-server",
  storageBucket: "kynangmem-server.appspot.com",
  messagingSenderId: "919282965588",
  appId: "1:919282965588:web:c15122cc1b6743cb7d61c1",
  measurementId: "G-Z7SSST3381"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
