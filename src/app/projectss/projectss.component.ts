import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { urlImgProjects } from '../link-images/link-images';
import { ProjectModel } from '../Models/ProjectModel';
import { Projects } from '../projectss';
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
  projects: any[];

  name:string;
  descripProject:string;
  urlFotoProject:string;
  urlProject:string;

  conectado(){
    return this.loginService.estaLogueado();
   }

  constructor(
    private loginService:LoginServiceService, 
    private serviceBackend:ServiceBackEndService,
    private actualizarDBservice: ActualizarDBService,
    private alerta:AlertasService) {
    this.serviceBackend.getProject().subscribe(resp=>{
      this.projects = resp;
    });
   }

   addDBProject(){
    let projectAdd = new ProjectModel(this.name, this.descripProject, this.urlFotoProject, this.urlProject); 
    this.actualizarDBservice.addProject(projectAdd);
    this.alerta.alertaAdd(projectAdd.name_project);
    
    this.serviceBackend.getProject().subscribe(resp=>{
      this.projects = resp;
  
      this.name = "";
      this.descripProject = "";
      this.urlFotoProject = "";
      this.urlProject = "";
    });
   }

   actualizarDBProject(){
    for (let i = 0; i <= this.projects.length; i++ ){
      if(this.projects[i] != null){
        this.actualizarDBservice.postProject(this.projects[i]);
      } else{
        console.log("el indice del array: " + i + " esta vacio");
      }
    }
    this.alerta.alertaUpdate("Proyecto");
   }

   deleteDBProject(id:number){
    this.actualizarDBservice.deleteProject(id);
    this.alerta.alertaDelete("Proyecto");
   }

  ngOnInit(): void {
  }

}
