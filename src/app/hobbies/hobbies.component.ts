import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { urlImgHobbies } from '../link-images/link-images';
import HobbieModel from '../Models/HobbieModel';
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
hobbies: HobbieModel[]; 
newHobbie: FormGroup;

conectado(){
  return this.loginService.estaLogueado();
 }

constructor(
  private loginService:LoginServiceService, 
  private serviceBackend:ServiceBackEndService,
  private actualizarDBservice: ActualizarDBService,
  private alerta:AlertasService) {

    this.newHobbie = new FormGroup({
      name_hobbies: new FormControl('', [Validators.required, Validators.minLength(2)]),
      url_photo_hobbies: new FormControl('', [Validators.required, Validators.minLength(2)]),
    })
 }

 async addHobbie(){
  await this.actualizarDBservice.addHobbie(this.newHobbie.value);
 }

 async updateHobbie(){
  await this.actualizarDBservice.updateHobbie(this.hobbies);
 }

 async deleteHobbie(hobbie: HobbieModel){
  await this.actualizarDBservice.deleteHobbie(hobbie); 
 }

  ngOnInit(): void {
    this.actualizarDBservice.getHobbie().subscribe(resp =>{
    this.hobbies = resp;
     }) 
  }
} 
