import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import SkillModel from '../Models/Skill';
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
  skills: SkillModel[]; 
  newSkill: FormGroup;

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

    this.newSkill = new FormGroup({
      name_skill: new FormControl('', [Validators.required, Validators.minLength(2)]),
      percentage_skill: new FormControl('', [Validators.required, Validators.minLength(1)])
    })
 }

 async addSkill(){
  await this.actualizarDBservice.addSkill(this.newSkill.value);
  this.newSkill.reset();
 }

 async updateSkill(){
  await this.actualizarDBservice.updateSkill(this.skills);
 }

 async deleteSkill(skill: SkillModel){
  await this.actualizarDBservice.deleteSkill(skill);
 }

  ngOnInit(): void {
    this.actualizarDBservice.getSkill().subscribe(resp =>{
      this.skills = resp;
     }) 
  }

}
