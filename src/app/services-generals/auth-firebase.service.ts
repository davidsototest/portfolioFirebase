import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { getAuth, signOut } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  constructor() { 
    
   }
   firebaseConfig = {
    apiKey: "AIzaSyBgRx1URJr2M2Y8OKYqULk23x652XBABk4",
    authDomain: "frontendportfolio-e949c.firebaseapp.com",
    projectId: "frontendportfolio-e949c",
    storageBucket: "frontendportfolio-e949c.appspot.com",
    messagingSenderId: "1081102602924",
    appId: "1:1081102602924:web:5712fb9935f2f077850509",
    measurementId: "G-TKCNPJ9KY8" 
  };
  
  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
  analytics = getAnalytics(this.app);
  
  
  auth = getAuth(this.app);

  cerrarSesion(){
    return signOut(this.auth);
  }
}



