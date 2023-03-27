const firebaseConfig = {
    apiKey: "AIzaSyBnejjisKKSI-WzvltUpJ4s86hYa3H4Cng",
    authDomain: "lets-chat-web-app-f95d2.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-f95d2-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-f95d2",
    storageBucket: "lets-chat-web-app-f95d2.appspot.com",
    messagingSenderId: "720783839315",
    appId: "1:720783839315:web:38cc0568f436fc955cb6a6"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    //Start code

    //End Code
});});}
getData();