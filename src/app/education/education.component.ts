import { Component, OnInit } from '@angular/core';
import { EducationModel } from '../Models/Education';
import { ActualizarDBService } from '../services-generals/actualizar-db.service';
import { AlertasService } from '../services-generals/alertas.service';
import { LoginServiceService } from '../services-generals/login-service.service';
import { ServiceBackEndService } from '../services-generals/service-back-end.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations: any[];

  name:string;
  nivel:string;
  duration:string;
  academia:string;
  url_logo:string;
  
  conectado(){
    return this.loginService.estaLogueado();
   }

    constructor(
      private loginService:LoginServiceService, 
      private serviceBackend:ServiceBackEndService,
      private actualizarDBservice: ActualizarDBService,
      private alerta:AlertasService) { 
      this.serviceBackend.getEducation().subscribe(resp=>{ 
        this.educations = resp;
      });
    }

    addEdu(){
      let eduAdd = new EducationModel(this.name, this.nivel, this.duration, this.academia, this.url_logo);
      this.actualizarDBservice.addEdu(eduAdd);
      this.alerta.alertaAdd("Educación")

      this.serviceBackend.getEducation().subscribe(resp=>{ 
        this.educations = resp;
        this.name = "";
        this.nivel = "";
        this.duration = "";
        this.academia = "";
        this.url_logo = "";
      });
    }

    actualizarDBEdu(){
      for (let i = 0; i <= this.educations.length; i++ ){
        if(this.educations[i] != null){
          this.actualizarDBservice.postEdu(this.educations[i]);
        } else{
          console.log("el indice del array: " + i + " esta vacio");
        }
      }
      this.alerta.alertaUpdate("Educación");
    }

    deleteDBEdu(id:number){
      this.actualizarDBservice.deleteEdu(id);
      this.alerta.alertaDelete("Educación")
     }


  ngOnInit(): void {
  }

}
