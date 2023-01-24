import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import EducationModel from '../Models/Education';
import { ActualizarDBService } from '../services-generals/actualizar-db.service';
import { AlertasService } from '../services-generals/alertas.service';
import { LoginServiceService } from '../services-generals/login-service.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations: EducationModel[];
  newEducation: FormGroup;

  conectado(){
    return this.loginService.estaLogueado();
   }

    constructor(
      private loginService:LoginServiceService,
      private actualizarDBservice: ActualizarDBService,
      private alerta:AlertasService) { 

        this.newEducation = new FormGroup({
          name_education: new FormControl('', [Validators.required, Validators.minLength(2)]),
          level_education: new FormControl('', [Validators.required, Validators.minLength(2)]),
          duration_education: new FormControl('', [Validators.required, Validators.minLength(2)]),
          place_education: new FormControl('', [Validators.required, Validators.minLength(2)]),
          url_photo_education: new FormControl('', [Validators.required, Validators.minLength(2)])
        })
    }

     async addEdu(){
      let response = await this.actualizarDBservice.addEducations(this.newEducation.value);
      this.newEducation.reset();
    }

    updateEdu(){
      this.actualizarDBservice.updateEducation(this.educations);
    }

    async deleteEdu(education: EducationModel){
      let response = await this.actualizarDBservice.deleteEducation(education);
     }


  ngOnInit(): void {
    this.actualizarDBservice.getEducation().subscribe(resp =>{
    this.educations = resp;
     }) 
  }

}
