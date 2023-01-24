import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import WordModel from '../Models/Word';
import { ActualizarDBService } from '../services-generals/actualizar-db.service';
import { AlertasService } from '../services-generals/alertas.service';
import { LoginServiceService } from '../services-generals/login-service.service';


@Component({
  selector: 'app-work-experiences',
  templateUrl: './work-experiences.component.html',
  styleUrls: ['./work-experiences.component.css'] 
})
export class WorkExperiencesComponent implements OnInit {
  wordExperience: WordModel[];
  newWord: FormGroup; 

constructor(
  private loginService:LoginServiceService,
  private actualizarDBservice: ActualizarDBService,
  private alerta:AlertasService) {

    this.newWord = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      job: new FormControl('', [Validators.required, Validators.minLength(2)]),
      chores: new FormControl('', [Validators.required, Validators.minLength(2)]),
      duration: new FormControl('', [Validators.required, Validators.minLength(2)]),
      url_logo: new FormControl('', [Validators.required, Validators.minLength(2)])
    })
 }

 conectado(){
  return this.loginService.estaLogueado();
 }

 async updateWordd(){
    await this.actualizarDBservice.updateWord(this.wordExperience);
 }

 async addDB(){  
  const response = await this.actualizarDBservice.addWord(this.newWord.value); 
  this.newWord.reset();
 }
 
 async deleteDB(word: WordModel){
  const response = await this.actualizarDBservice.deleteWord(word);
  console.log(response);
 }
 
  ngOnInit(): void {
   this.actualizarDBservice.getWord().subscribe(resp =>{
    this.wordExperience = resp;
   }) 
  }

}
