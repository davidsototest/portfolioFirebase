import { Component, OnInit } from '@angular/core';
import { ActualizarDBService } from '../services-generals/actualizar-db.service';
import { LoginServiceService } from '../services-generals/login-service.service';
import { Auth, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthFirebaseService } from '../services-generals/auth-firebase.service';
import { AlertasService } from '../services-generals/alertas.service';
import Contact from '../Models/contacts';
// import { AuthFirebaseService } from '../services-generals/auth-firebase.service';

@Component({
  selector: 'app-contact-login',
  templateUrl: './contact-login.component.html',
  styleUrls: ['./contact-login.component.css'] 
})
export class ContactLoginComponent implements OnInit {
  contacts: Contact[];

  credenciales:any;
  form:any = {
    email: "",
    password: "",
  }
  
  constructor(
    private loginService:LoginServiceService,
    private actualizarDBservice: ActualizarDBService,
    private auth:AuthFirebaseService,
    private alerta:AlertasService
    ) {
    // this.serviceBackend.getContact().subscribe(resp=>{
    //   this.contacts = resp;
    //   console.log (this.contacts);
    // });
   } 

  // Inicio de sesion
  loginFirebase(){

    // if(this.form.email.length > 8 && this.form.password.length >= 6){
    //   this.loginService.loginFirebaseService(this.form.email, this.form.password);

    // } else if (this.form.email.length <= 8){
    //   this.alerta.alertaEmail();

    // } else if (this.form.password.length < 6) {
    //  this.alerta.alertaContrasena();
    // } 
  }
    
  

  //estado de los botones  
  conectado(){
    return this.loginService.estaLogueado();
   }

  // cerrar de sesion
  signOut(){
    // this.auth.cerrarSesion();
    // this.loginService.retorno = false;
    // window.location.reload();
  }


  // estaLogueado(){ 
  //   return false;
  //   // this.loginService.estaLogueado();
  //   // return this.loginService.retorno;
  // }

  async updateContact(){
    await this.actualizarDBservice.updateContacts(this.contacts);
  }

  ngOnInit(): void {
    this.actualizarDBservice.getContacts().subscribe(resp =>{
      this.contacts = resp;
     })
     console.log(this.contacts);
  }
}
