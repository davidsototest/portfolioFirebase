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
  retorno:boolean = false; 
  credenciales:any;
  errorCode:string;


  // devuelve el token para consultas.
  getIdToken(){
    //return this.token;
    return this.token;
  }
  // email:string, password:string

    // Inicio de sesion
  loginFirebaseService(form: any){ 
       
          signInWithEmailAndPassword(this.authFirebase1.auth, form.user, form.password).then((userCredencial) =>{
            this.credenciales = userCredencial;
              this.retorno = true; 
              this.alerta.alertaInicioSesion(this.credenciales.user.email); 
              }).catch (error => {
                switch (error.message){
                  case 'Firebase: Error (auth/invalid-email).':{
                    return this.alerta.alertaLoginEmail();
                  }
                  case 'Firebase: Error (auth/wrong-password).':{
                    return this.alerta.alertaContrasena();
                  }
                  case 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).':{
                    return this.alerta.alertaBloqueado();
                  }
                  case 'Firebase: Error (auth/user-not-found).':{
                    return this.alerta.alertaLoginEmail();
                  }
                  default:{
                    return this.alerta.alertaInesperada(error);                    
                  }
                }
                this.alerta.alertaInesperada(error);
        });  
    }

  estaLogueado(){
    return this.retorno;
    }
} 