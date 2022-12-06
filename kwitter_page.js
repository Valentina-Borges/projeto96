// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY_A5z_GxZP3wimlgSeVkdFbJiXmyhxC8",
  authDomain: "aula93-bfeee.firebaseapp.com",
  projectId: "aula93-bfeee",
  storageBucket: "aula93-bfeee.appspot.com",
  messagingSenderId: "204871272614",
  appId: "1:204871272614:web:7be3b0d5c68746d0fb0c67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

room_name = localStorage.getItem("room_name");


function send() {

}

function logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
    window.location.replace("index.html");
    }