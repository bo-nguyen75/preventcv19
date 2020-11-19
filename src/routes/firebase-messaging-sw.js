importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js');
var firebaseConfig = {
    apiKey: "AIzaSyCmGh-h-OHnVA0yzcYC5i_i7yDGx7PtcAg",
    authDomain: "contactform-cb752.firebaseapp.com",
    databaseURL: "https://contactform-cb752.firebaseio.com",
    projectId: "contactform-cb752",
    storageBucket: "contactform-cb752.appspot.com",
    messagingSenderId: "314589891442",
    appId: "1:314589891442:web:f5570e245ed0f746d42beb",
    measurementId: "G-374QV6EMCG"
  };

const messaging= firebase.messaging();
//Lay dia chi Email + Thong bao

messaging.setBackgroundHandler(function(payload){
    //Email
    const title ={
        body: payload.email.title
    };
    //Thong Bao
    const options= {
        body: payload.datanews.content
    };
    return self.registration.showNotification(title,options);
})