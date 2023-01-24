import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ContactLoginComponent } from '../contact-login/contact-login.component';
import { Auth, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { AuthFirebaseService } from '../services-generals/auth-firebase.service';
import Swal from 'sweetalert2'
import { AlertasService } from './alertas.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private router:Router,
              private authFirebase1: AuthFirebaseService,
              private alerta:AlertasService,
               ) {
                }

  token: any;
  cookies:any;
  retorno:boolean = true; 
  credenciales:any;
  errorCode:string;


  // devuelve el token para consultas.
  getIdToken(){
    //return this.token;
    return this.token;
  }


    // Inicio de sesion
  // loginFirebaseService(email:string, password:string){
  //       signInWithEmailAndPassword(this.authFirebase1.auth, email, password).then((userCredencial) =>{
  //         this.credenciales = userCredencial;
  //         userCredencial.user.getIdToken().then(token=>{
  //           this.token = token;
  //         })
  //           this.retorno = true; 
  //           this.alerta.alertaInicioSesion(this.credenciales.user.email); 
  //           })  

  //           .catch((error) =>{
  //             console.log(error.code);
  //            if(error.code == "auth/wrong-password"){
  //             this.alerta.alertaLoginContrasena();

  //            } else if(error.code == "auth/user-not-found"){
  //             this.alerta.alertaLoginEmail();
  //            } else {
  //             this.alerta.alertaInesperada();
  //            }
  //           })
  //   }

  estaLogueado(){
    return this.retorno;
    }
} 