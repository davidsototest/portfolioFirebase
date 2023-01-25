import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import ProjectModel from '../Models/ProjectModel';
import { ActualizarDBService } from '../services-generals/actualizar-db.service';
import { AlertasService } from '../services-generals/alertas.service';
import { LoginServiceService } from '../services-generals/login-service.service';
import { ServiceBackEndService } from '../services-generals/service-back-end.service';

@Component({
  selector: 'app-projectss',
  templateUrl: './projectss.component.html',
  styleUrls: ['./projectss.component.css']
})
export class ProjectssComponent implements OnInit {
  projects: ProjectModel[];
  newProject: FormGroup;

  conectado(){
    return this.loginService.estaLogueado();
   }

  constructor(
    private loginService:LoginServiceService, 
    private serviceBackend:ServiceBackEndService,
    private actualizarDBservice: ActualizarDBService,
    private alerta:AlertasService) {

      this.newProject = new FormGroup({
        name_project: new FormControl('', [Validators.required, Validators.minLength(2)]),
        description_project: new FormControl('', [Validators.required, Validators.minLength(2)]),
        url_photo_project: new FormControl('', [Validators.required, Validators.minLength(2)]),
        url_project: new FormControl('', [Validators.required, Validators.minLength(2)])
      })
   }

   async addProject(){
    await this.actualizarDBservice.addProject(this.newProject.value);
   }

   async updateProject(){
    await this.actualizarDBservice.updateProject(this.projects);
   }

   async deleteProject(project: ProjectModel){
    await this.actualizarDBservice.deleteProject(project);  
   }

  ngOnInit(): void {
    this.actualizarDBservice.getProject().subscribe(resp =>{
      this.projects = resp;
     }) 
  }
}
