import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { getAuth, signOut } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  constructor() { 

   }
  //  firebaseConfig = {
  //   apiKey: "AIzaSyCU5KLty5iJ6b85OVCGjhiWaFFjy54qzhc",
  //   authDomain: "portfolio-ds2023.firebaseapp.com",
  //   projectId: "portfolio-ds2023",
  //   storageBucket: "portfolio-ds2023.appspot.com",
  //   messagingSenderId: "30725051570",
  //   appId: "1:30725051570:web:d8e3adbadf1acad8b6a5ab"
  // };
 
  // Initialize Firebase
  app = initializeApp(environment.firebase);
  analytics = getAnalytics(this.app);  
  
  auth = getAuth(this.app);

  database = getDatabase(this.app);

  cerrarSesion(){
    return signOut(this.auth);
  }
}



