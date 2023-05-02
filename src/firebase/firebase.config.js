// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBih9OsUlVbcpot-qmw0RI75eB_txxzm1I",
    authDomain: "chef-recipe-hunter-52f6d.firebaseapp.com",
    projectId: "chef-recipe-hunter-52f6d",
    storageBucket: "chef-recipe-hunter-52f6d.appspot.com",
    messagingSenderId: "903403923561",
    appId: "1:903403923561:web:e13cda097522281ddf5af8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;