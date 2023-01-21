import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { urlImgHobbies } from '../link-images/link-images';
import { HobbieModel } from '../Models/HobbieModel';
import { ActualizarDBService } from '../services-generals/actualizar-db.service';
import { AlertasService } from '../services-generals/alertas.service';
import { LoginServiceService } from '../services-generals/login-service.service';
import { ServiceBackEndService } from '../services-generals/service-back-end.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
urlImgHobbies:string=urlImgHobbies;
hobbies: any[]; 

name:string;
urlFoto:string;

conectado(){
  return this.loginService.estaLogueado();
 }

constructor(
  private loginService:LoginServiceService, 
  private serviceBackend:ServiceBackEndService,
  private actualizarDBservice: ActualizarDBService,
  private alerta:AlertasService) {
  this.serviceBackend.getHobbies().subscribe(resp=>{
    this.hobbies = resp; 
  }); 
 }

 addDBHobbie(){
  let hobbieAdd = new HobbieModel(this.name, this.urlFoto); 
  this.actualizarDBservice.addHobbie(hobbieAdd);
  this.alerta.alertaAdd(hobbieAdd.name_hobbies);

  this.serviceBackend.getHobbies().subscribe(resp=>{
    this.hobbies = resp;
  }); 

 }

 actualizarDBHobbies(){
  for (let i = 0; i <= this.hobbies.length; i++ ){
    if(this.hobbies[i] != null){
      this.actualizarDBservice.postHobbie(this.hobbies[i]);
    } else{
      console.log("el indice del array: " + i + " esta vacio");
    }
  }
  this.alerta.alertaUpdate("Pasatiempo");
 }

 deleteDBHobbie(id:number){
  this.actualizarDBservice.deleteHobbie(id);
  this.alerta.alertaDelete("Pasatiempo");
 }

  ngOnInit(): void {
  }

} 
