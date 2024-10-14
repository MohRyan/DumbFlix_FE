// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDc940VpbzkHSBODL1Qa4eEx_Vpeq4unek",
    authDomain: "belajardb-7ca0a.firebaseapp.com",
    databaseURL: "https://belajardb-7ca0a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "belajardb-7ca0a",
    storageBucket: "belajardb-7ca0a.appspot.com",
    messagingSenderId: "800531419510",
    appId: "1:800531419510:web:0315c28647a9b261fd2a57",
    measurementId: "G-TEZLPTWPJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }