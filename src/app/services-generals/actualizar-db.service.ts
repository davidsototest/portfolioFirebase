import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import BannerPresentation from '../Models/BannerPresentation';
import Contact from '../Models/contacts';
import EducationModel from '../Models/Education';
import HobbieModel from '../Models/HobbieModel';
import ProjectModel from '../Models/ProjectModel';
import SkillModel from '../Models/Skill';
import WordModel from '../Models/Word';
import { AlertasService } from './alertas.service';

@Injectable({
  providedIn: 'root'
})
export class ActualizarDBService {

  constructor(
              private firestore:Firestore,
              private alerta:AlertasService) { 
    }

    //Servicios de Banner///////////
    getBanner(): Observable<BannerPresentation[]> {
      let bannerRef = collection(this.firestore, 'banner');
      return collectionData(bannerRef, { idField: 'id' }) as Observable<BannerPresentation[]>;
    }

    updateBanner(banner: any[]){
      try {
        for (let i = 0; i <= banner.length; i ++){
          let bannerUpdateRef = doc(this.firestore, `banner/${banner[i].id}`);
          updateDoc(bannerUpdateRef, banner[i]);
        }
        this.alerta.alertaUpdate("Banner Principal");
      } catch (error) {
        if(error == "TypeError: Cannot read properties of undefined (reading 'id')"){
          this.alerta.alertaUpdate("Banner Principal");
        }else{
          this.alerta.alertaInesperada(error);
        }
      } 
    }

    //Servicios de contactos///////////
    getContacts(): Observable<Contact[]> {
      let contactsRef = collection(this.firestore, 'contacts');
      return collectionData(contactsRef, { idField: 'id' }) as Observable<Contact[]>;
    }

    updateContacts(contact: any[]){
      try {
        for (let i = 0; i <= contact.length; i ++){
          let contactUpdateRef = doc(this.firestore, `contacts/${contact[i].id}`);
          updateDoc(contactUpdateRef, contact[i]);
        }
        this.alerta.alertaUpdate("Contactos");
      } catch (error) {
        if(error == "TypeError: Cannot read properties of undefined (reading 'id')"){
          this.alerta.alertaUpdate("Contactos");
        }else{
          this.alerta.alertaInesperada(error);
        }
      } 
    }

    //Servicios de Experiencias Laborales////////////
    addWord(word: WordModel){     
      try {
        let wordRef = collection(this.firestore, 'words');
        this.alerta.alertaAdd();
        return addDoc(wordRef, word);        
      } catch (error) {
        if(error == "TypeError: Cannot read properties of undefined (reading 'id')"){
          this.alerta.alertaAdd();
        }else{
          this.alerta.alertaInesperada(error);
        }
        return
      }      
    }

    getWord(): Observable<WordModel[]> {
      let wordRef = collection(this.firestore, 'words');
      return collectionData(wordRef, { idField: 'id' }) as Observable<WordModel[]>;
    }

    deleteWord(word: WordModel){
      try {
        let wordDocRef = doc(this.firestore, `words/${word.id}`);
        this.alerta.alertaDelete(word.name);
        return deleteDoc(wordDocRef);        
      } catch (error) {
        if(error == "TypeError: Cannot read properties of undefined (reading 'id')"){
          this.alerta.alertaDelete(word.name);
        }else{
          this.alerta.alertaInesperada(error);
        }
        return
      }
    }

    updateWord(words: any[]){
      try {
        for (let i = 0; i <= words.length; i ++){
          let wordUpdateRef = doc(this.firestore, `words/${words[i].id}`);
          updateDoc(wordUpdateRef, words[i]);
        }
        this.alerta.alertaUpdate("Experiencia Laboral");
      } catch (error) {
        if(error == "TypeError: Cannot read properties of undefined (reading 'id')"){
          this.alerta.alertaUpdate("Experiencia Laboral");
        }else{
          this.alerta.alertaInesperada(error);
        }
      } 
    }

    //Servicios de Educación///////////
    getEducation(): Observable<EducationModel[]> {
      let educationRef = collection(this.firestore, 'educations');
      return collectionData(educationRef, { idField: 'id' }) as Observable<EducationModel[]>;
    }

    addEducations(education: EducationModel){     
      try {
        let educationRef = collection(this.firestore, 'educations');
        this.alerta.alertaAdd();
        return addDoc(educationRef, education);        
      } catch (error) {
        if(error == "TypeError: Cannot read properties of undefined (reading 'id')"){
          this.alerta.alertaAdd();
        }else{
          this.alerta.alertaInesperada(error);
        }
        return
      }
    }

    updateEducation(education: any[]){
      try {
        for (let i = 0; i <= education.length; i ++){
          let educationUpdateRef = doc(this.firestore, `educations/${education[i].id}`);
          updateDoc(educationUpdateRef, education[i]);
        }
        this.alerta.alertaUpdate("Educación");
      } catch (error) {
        if(error == "TypeError: Cannot read properties of undefined (reading 'id')"){
          this.alerta.alertaUpdate("Educación");
        }else{
          this.alerta.alertaInesperada(error);
        }
      } 
    }

    deleteEducation(education: EducationModel){
      try {
        let educationDocRef = doc(this.firestore, `educations/${education.id}`);
        this.alerta.alertaDelete(education.name_education);
        return deleteDoc(educationDocRef);        
      } catch (error) {
        if(error == "TypeError: Cannot read properties of undefined (reading 'id')"){
          this.alerta.alertaDelete(education.name_education);
        }else{
          this.alerta.alertaInesperada(error);
        }
        return
      }
    }

    //Servicios de Habilidades SKILLs///////////
    getSkill(): Observable<SkillModel[]> {
      let skillRef = collection(this.firestore, 'skills');
      return collectionData(skillRef, { idField: 'id' }) as Observable<SkillModel[]>;
    }

    addSkill(skill: SkillModel){     
      try {
        let skillRef = collection(this.firestore, 'skills');
        this.alerta.alertaAdd();
        return addDoc(skillRef, skill);        
      } catch (error) {
        if(error == "TypeError: Cannot read properties of undefined (reading 'id')"){
          this.alerta.alertaAdd();
        }else{
          this.alerta.alertaInesperada(error);
        }
        return
      }
    }

    updateSkill(skill: any[]){
      try {
        for (let i = 0; i <= skill.length; i ++){
          let skillUpdateRef = doc(this.firestore, `skills/${skill[i].id}`);
          updateDoc(skillUpdateRef, skill[i]);
        }
        this.alerta.alertaUpdate("Habilidades");
      } catch (error) {
        if(error == "TypeError: Cannot read properties of undefined (reading 'id')"){
          this.alerta.alertaUpdate("Habilidades");
        }else{
          this.alerta.alertaInesperada(error);
        }
      } 
    }

    deleteSkill(skill: SkillModel){
      try {
        let skillDocRef = doc(this.firestore, `skills/${skill.id}`);
        this.alerta.alertaDelete(skill.name_skill);
        return deleteDoc(skillDocRef);        
      } catch (error) {
        if(error == "TypeError: Cannot read properties of undefined (reading 'id')"){
          this.alerta.alertaDelete(skill.name_skill);
        }else{
          this.alerta.alertaInesperada(error);
        }
        return
      }      
    }

    //Servicios de Proyectos///////////
    getProject(): Observable<ProjectModel[]> {
      let projectRef = collection(this.firestore, 'projects');
      return collectionData(projectRef, { idField: 'id' }) as Observable<ProjectModel[]>;
    }

    addProject(project: ProjectModel){     
      try {
        let projectRef = collection(this.firestore, 'projects');
        this.alerta.alertaAdd();
        return addDoc(projectRef, project);        
      } catch (error) {
        if(error == "TypeError: Cannot read properties of undefined (reading 'id')"){
          this.alerta.alertaAdd();
        }else{
          this.alerta.alertaInesperada(error);
        }
        return
      }
    }

    updateProject(project: any[]){
      try {
        for (let i = 0; i <= project.length; i ++){
          let projectUpdateRef = doc(this.firestore, `projects/${project[i].id}`);
          updateDoc(projectUpdateRef, project[i]);
        }
        this.alerta.alertaUpdate("Proyectos");
      } catch (error) {
        if(error == "TypeError: Cannot read properties of undefined (reading 'id')"){
          this.alerta.alertaUpdate("Proyectos");
        }else{
          this.alerta.alertaInesperada(error);
        }
      } 
    }

    deleteProject(project: ProjectModel){
      try {
        let projectDocRef = doc(this.firestore, `projects/${project.id}`);
        this.alerta.alertaDelete(project.name_project);
        return deleteDoc(projectDocRef);        
      } catch (error) {
        if(error == "TypeError: Cannot read properties of undefined (reading 'id')"){
          this.alerta.alertaDelete(project.name_project);
        }else{
          this.alerta.alertaInesperada(error);
        }
        return
      }          
    }

    //Servicios de Pasatiempos///////////
    getHobbie(): Observable<HobbieModel[]> {
      let hobbieRef = collection(this.firestore, 'hobbies');
      return collectionData(hobbieRef, { idField: 'id' }) as Observable<HobbieModel[]>;
    }

    addHobbie(hobbie: HobbieModel){     
      try {
        let hobbieRef = collection(this.firestore, 'hobbies');
        this.alerta.alertaAdd();
        return addDoc(hobbieRef, hobbie);        
      } catch (error) {
        if(error == "TypeError: Cannot read properties of undefined (reading 'id')"){
          this.alerta.alertaAdd();
        }else{
          this.alerta.alertaInesperada(error);
        }
        return
      }
    }

    updateHobbie(hobbie: any[]){
      try {
        for (let i = 0; i <= hobbie.length; i ++){
          let hobbieUpdateRef = doc(this.firestore, `hobbies/${hobbie[i].id}`);
          updateDoc(hobbieUpdateRef, hobbie[i]);
        }
        this.alerta.alertaUpdate("Pasatiempo");
      } catch (error) {
        if(error == "TypeError: Cannot read properties of undefined (reading 'id')"){
          this.alerta.alertaUpdate("Pasatiempo");
        }else{
          this.alerta.alertaInesperada(error);
        }
      } 
    }

    deleteHobbie(hobbie: HobbieModel){
      try {
        let hobbieDocRef = doc(this.firestore, `hobbies/${hobbie.id}`);
        this.alerta.alertaDelete(hobbie.name_hobbies);
        return deleteDoc(hobbieDocRef);        
      } catch (error) {
        if(error == "TypeError: Cannot read properties of undefined (reading 'id')"){
          this.alerta.alertaDelete(hobbie.name_hobbies);
        }else{
          this.alerta.alertaInesperada(error);
        }
        return
      }      
    }

    //Servicios de FOOTER///////////
    getFooter(): Observable<any[]> {
      let footerRef = collection(this.firestore, 'footer');
      return collectionData(footerRef, { idField: 'id' }) as Observable<any[]>;
    }

    updateFooter(footer: any[]){
      try {
        for (let i = 0; i <= footer.length; i ++){
          let footerUpdateRef = doc(this.firestore, `footer/${footer[i].id}`);
          updateDoc(footerUpdateRef, footer[i]);
        }
        this.alerta.alertaUpdate("Footer");
      } catch (error) {
        if(error == "TypeError: Cannot read properties of undefined (reading 'id')"){
          this.alerta.alertaUpdate("Footer");
        }else{
          this.alerta.alertaInesperada(error);
        }
      } 
    }
  }

