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

document.getElementByld("user_name").innerHTML = "Bem-vindo(a) " +
user_name + "!";

function addRoom()
{
  room_name = document.getElementByld("room_name").value;

  firebaseConfig.database().rerf("/").child(room_name).update({ 
    purpose : "adicionar sala"
});

  
  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() { firebase.database().ref("/").on('value',
function(snapshot) { document.getElementByld("output").innerHTML = "";
snapshot.forEach(function(childsnapshot) { childKey =
childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+ Room_names+"
onclick='redirectToRoomName(this.id)' >#"+ Room_Names +"</div><hr>";
      document.getElementByld("output").innerHTML += row;
      } );
    } );

}

getData();

function redirecToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
window.location.replace("index.html");
}