import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from
"https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyCTSFBNTJJCijfSf3IPujjE0OyeDI4NG90",
    authDomain: "auth-373e7.firebaseapp.com",
    databaseURL: "https://auth-373e7-default-rtdb.firebaseio.com",
    projectId: "auth-373e7",
    storageBucket: "auth-373e7.firebasestorage.app",
    messagingSenderId: "682820014881",
    appId: "1:682820014881:web:146a8e63e6c2a73c136460",
    measurementId: "G-VPTVRWY4ET"
  };
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
window.sendMessage=function(){
    let username=document.getElementById("username").value;
    let message=document.getElementById("message").value;
    if (username === "" || message === "") return;
    push(ref(db,"messages"),{
         name:username,
         text:message
    
    });
    document.getElementById("message").value = ""; //clear the input value
    }
    onChildAdded(ref(db, "messages"), function(item) {
        let data = item.val();
        let messages = document.getElementById("messages");//targeted empty div
        let msgElement = document.createElement("p");
        msgElement.textContent = data.name + ": " + data.text;
        messages.appendChild(msgElement)
        messages.scrollTop = messages.scrollHeight;
        });

