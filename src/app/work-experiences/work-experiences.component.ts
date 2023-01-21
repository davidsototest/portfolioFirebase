import { Component, OnInit } from '@angular/core';
import { WordModel } from '../Models/Word';
import { ActualizarDBService } from '../services-generals/actualizar-db.service';
import { AlertasService } from '../services-generals/alertas.service';
import { LoginServiceService } from '../services-generals/login-service.service';
import { ServiceBackEndService } from '../services-generals/service-back-end.service';

@Component({
  selector: 'app-work-experiences',
  templateUrl: './work-experiences.component.html',
  styleUrls: ['./work-experiences.component.css'] 
})
export class WorkExperiencesComponent implements OnInit {
  wordExperience: any[];
 // wordAdd:WordModel;
  wordE: any;

  name:string;
  job:string;
  chores:string;
  duration:string;
  url_logo:string;  

constructor(
  private loginService:LoginServiceService, 
  private serviceBackend:ServiceBackEndService,
  private actualizarDBservice: ActualizarDBService,
  private alerta:AlertasService) {

  this.serviceBackend.getWord().subscribe(resp=>{
    this.wordExperience = resp; 
    console.log (resp);  
     
    
  });
 }

 conectado(){
  return this.loginService.estaLogueado();
 }

 actualizarDB(){
  for (let i = 0; i <= this.wordExperience.length; i++ ){
    if(this.wordExperience[i] != null){
      this.actualizarDBservice.postWord(this.wordExperience[i]);
    } else{
      console.log("el indice del array: " + i + " esta vacio");
    }
  }
  this.alerta.alertaUpdate("Experiencia Laboral");
 }

 addDB(){
  let wordAdd = new WordModel(this.name, this.job, this.chores, this.duration, this.url_logo); 
  this.actualizarDBservice.addWord(wordAdd);
  this.alerta.alertaAdd(wordAdd.name_business);
    this.serviceBackend.getWord().subscribe(resp=>{
    this.wordExperience = resp;
    this.name = "";
    this.job = "";
    this.chores = "";
    this.duration = "";
    this.url_logo = ""; 
  });
 }
 
 deleteDB(id:number){
  this.actualizarDBservice.deleteWord(id);
  this.alerta.alertaDelete("Experiencia Laboral")
 }
 
  ngOnInit(): void {
   
  }

}
