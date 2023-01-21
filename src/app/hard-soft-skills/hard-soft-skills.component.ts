import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { SkillModel } from '../Models/Skill';
import { ActualizarDBService } from '../services-generals/actualizar-db.service';
import { AlertasService } from '../services-generals/alertas.service';
import { LoginServiceService } from '../services-generals/login-service.service';
import { ServiceBackEndService } from '../services-generals/service-back-end.service';


@Component({
  selector: 'app-hard-soft-skills',
  templateUrl: './hard-soft-skills.component.html',
  styleUrls: ['./hard-soft-skills.component.css']
})
export class HardSoftSkillsComponent implements OnInit {
  valor3:number=50;
  skills: any[];

  habilidad:string;
  porcentaje:number;

  conectado(){
    return this.loginService.estaLogueado();
   }


constructor(
  private loginService:LoginServiceService, 
  private serviceBackend:ServiceBackEndService,
  private actualizarDBservice: ActualizarDBService,
  private alerta:AlertasService) {
  this.serviceBackend.getSkill().subscribe(resp=>{
    this.skills = resp;
  });
 }

 addDBSkill(){
  let skillAdd = new SkillModel(this.habilidad, this.porcentaje); 
  this.actualizarDBservice.addSkill(skillAdd);
  this.alerta.alertaAdd(skillAdd.name_skill);
  
  this.serviceBackend.getSkill().subscribe(resp=>{
    this.skills = resp;

    this.habilidad = "";
    this.porcentaje = 0;
  });
 }

 actualizarDBSkill(){
  for (let i = 0; i <= this.skills.length; i++ ){
    if(this.skills[i] != null){
      this.actualizarDBservice.postSkill(this.skills[i]);
    } else{
      console.log("el indice del array: " + i + " esta vacio");
    }
  }
  this.alerta.alertaUpdate("Habilidad");
 }

 deleteDBSkill(id:number){
  this.actualizarDBservice.deleteSkill(id);
  this.alerta.alertaDelete("Habilidad");
 }

  ngOnInit(): void {
  }

}
