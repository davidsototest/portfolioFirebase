import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, UpdateData, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import BannerPresentation from '../Models/BannerPresentation';
import Contact from '../Models/contacts';
import EducationModel from '../Models/Education';
import HobbieModel from '../Models/HobbieModel';
import ProjectModel from '../Models/ProjectModel';
import SkillModel from '../Models/Skill';
import WordModel from '../Models/Word';

@Injectable({
  providedIn: 'root'
})
export class ActualizarDBService {
  url_banner: string;
  url_word: any;
  url_education: string;
  url_skill:string;
  url_project:string;
  url_hobbie:string;
  url_contact:string;


  constructor(private http: HttpClient,
              private firestore:Firestore) { 
    this.url_banner = 'https://backendportfoliods.onrender.com/usuario';
    this.url_word = 'https://backendportfoliods.onrender.com/word';
    this.url_education = 'https://backendportfoliods.onrender.com/education';
    this.url_skill = 'https://backendportfoliods.onrender.com/skill';
    this.url_project = 'https://backendportfoliods.onrender.com/project';
    this.url_hobbie = 'https://backendportfoliods.onrender.com/hobbies';
    this.url_contact = 'https://backendportfoliods.onrender.com/contact';
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
        return (console.log("completado"));
      } catch (error) {
        console.log(error);
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
        return (console.log("completado"));
      } catch (error) {
        console.log(error);
      } 
    }

    //Servicios de Experiencias Laborales////////////
    addWord(word: WordModel){     
      let wordRef = collection(this.firestore, 'words');
      return addDoc(wordRef, word);
    }

    getWord(): Observable<WordModel[]> {
      let wordRef = collection(this.firestore, 'words');
      return collectionData(wordRef, { idField: 'id' }) as Observable<WordModel[]>;
    }

    deleteWord(word: WordModel){
      let wordDocRef = doc(this.firestore, `words/${word.id}`);
      return deleteDoc(wordDocRef);
    }

    updateWord(words: any[]){
      try {
        for (let i = 0; i <= words.length; i ++){
          let wordUpdateRef = doc(this.firestore, `words/${words[i].id}`);
          updateDoc(wordUpdateRef, words[i]);
        }
        return (console.log("completado"));
      } catch (error) {
        console.log(error);
      } 
    }

    //Servicios de Educacion///////////
    getEducation(): Observable<EducationModel[]> {
      let educationRef = collection(this.firestore, 'educations');
      return collectionData(educationRef, { idField: 'id' }) as Observable<EducationModel[]>;
    }

    addEducations(education: EducationModel){     
      let educationRef = collection(this.firestore, 'educations');
      return addDoc(educationRef, education);
    }

    updateEducation(education: any[]){
      try {
        for (let i = 0; i <= education.length; i ++){
          let educationUpdateRef = doc(this.firestore, `educations/${education[i].id}`);
          updateDoc(educationUpdateRef, education[i]);
        }
        return (console.log("alerta"));
      } catch (error) {
        console.log(error);
      } 
    }

    deleteEducation(education: EducationModel){
      let educationDocRef = doc(this.firestore, `educations/${education.id}`);
      return deleteDoc(educationDocRef);
    }


    //Servicios de Habilidades SKILLs///////////
    getSkill(): Observable<SkillModel[]> {
      let skillRef = collection(this.firestore, 'skills');
      return collectionData(skillRef, { idField: 'id' }) as Observable<SkillModel[]>;
    }

    addSkill(skill: SkillModel){     
      let skillRef = collection(this.firestore, 'skills');
      return addDoc(skillRef, skill);
    }

    updateSkill(skill: any[]){
      try {
        for (let i = 0; i <= skill.length; i ++){
          let skillUpdateRef = doc(this.firestore, `skills/${skill[i].id}`);
          updateDoc(skillUpdateRef, skill[i]);
        }
        return (console.log("alerta"));
      } catch (error) {
        console.log(error);
      } 
    }

    deleteSkill(skill: SkillModel){
      let skillDocRef = doc(this.firestore, `skills/${skill.id}`);
      return deleteDoc(skillDocRef);      
    }


    //Servicios de Proyectos///////////
    getProject(): Observable<ProjectModel[]> {
      let projectRef = collection(this.firestore, 'projects');
      return collectionData(projectRef, { idField: 'id' }) as Observable<ProjectModel[]>;
    }

    addProject(project: ProjectModel){     
      let projectRef = collection(this.firestore, 'projects');
      return addDoc(projectRef, project);
    }

    updateProject(project: any[]){
      try {
        for (let i = 0; i <= project.length; i ++){
          let projectUpdateRef = doc(this.firestore, `projects/${project[i].id}`);
          updateDoc(projectUpdateRef, project[i]);
        }
        return (console.log("alerta"));
      } catch (error) {
        console.log(error);
      } 
    }

    deleteProject(project: ProjectModel){
      let projectDocRef = doc(this.firestore, `projects/${project.id}`);
      return deleteDoc(projectDocRef);          
    }


    //Servicios de Pasatiempos///////////
    getHobbie(): Observable<HobbieModel[]> {
      let hobbieRef = collection(this.firestore, 'hobbies');
      return collectionData(hobbieRef, { idField: 'id' }) as Observable<HobbieModel[]>;
    }

    addHobbie(hobbie: HobbieModel){     
      let hobbieRef = collection(this.firestore, 'hobbies');
      return addDoc(hobbieRef, hobbie);
    }

    updateHobbie(hobbie: any[]){
      try {
        for (let i = 0; i <= hobbie.length; i ++){
          let hobbieUpdateRef = doc(this.firestore, `hobbies/${hobbie[i].id}`);
          updateDoc(hobbieUpdateRef, hobbie[i]);
        }
        return (console.log("alerta"));
      } catch (error) {
        console.log(error);
      } 
    }

    deleteHobbie(hobbie: HobbieModel){
      let hobbieDocRef = doc(this.firestore, `hobbies/${hobbie.id}`);
      return deleteDoc(hobbieDocRef);
      
    }

  





    // BANNER y WORDs//
    // public postBanner( body:BannerPresentation){
    //   return this.http.post<BannerPresentation>(this.url_banner, body).subscribe(resp =>{
    //     this.respuestaPost = resp;
    //   })
    // }

    // public postWord (body:string) {
    //   return this.http.post<any>(this.url_word, body).subscribe(resp =>{
    //     this.respuestaAddWord = resp;
    //   })
    // }

    // public addWord (body:WordModel){
    //   return this.http.post<WordModel>(this.url_word, body).subscribe(resp =>{
    //     this.respuestaWord = resp;
    //   });
    // }

    // public deleteWord(id:number){
    //   return this.http.delete<number>(this.url_word+"/"+id).subscribe(resp =>{
    //     this.respuestaDeleteWord = resp;
    //   })
    // }
    
    // // EDUCATION ///

    // public addEdu (body:EducationModel){
    //   return this.http.post<EducationModel>(this.url_education, body).subscribe(resp =>{
    //     this.respuestaEducation = resp;
    //   })
    // }

    // public postEdu(body:any){
    //   return this.http.post<any>(this.url_education, body).subscribe(resp =>{
    //     this.respuestaPostEducation = resp;
    //   })
    // }

    // public deleteEdu(id:number){
    //   return this.http.delete<number>(this.url_education+"/"+id).subscribe(resp =>{
    //     this.respuestaDeleteEdu = resp;
    //   }) 
    // }

    //   //// Skills /////

    //   public addSkill (body:SkillModel){
    //     return this.http.post<SkillModel>(this.url_skill, body).subscribe(resp =>{
    //       this.respuestaAddSkill = resp;
    //     })
    //   }

    //   public postSkill(body:any){
    //     return this.http.post<any>(this.url_skill, body).subscribe(resp =>{
    //       this.respuestaPostSkill = resp;
    //     })
    //   }

    //   public deleteSkill(id:number){
    //     return this.http.delete<number>(this.url_skill+"/"+id).subscribe(resp =>{
    //       this.respuestaDeleteSkill = resp;
    //     }) 
    //   }

    //   // PROJECTS  ////////////

    //   public addProject (body:ProjectModel){
    //     return this.http.post<ProjectModel>(this.url_project, body).subscribe(resp =>{
    //       this.respuestaAddProject = resp;
    //     })
    //   }

    //   public postProject(body:any){
    //     return this.http.post<any>(this.url_project, body).subscribe(resp =>{
    //       this.respuestaPostProject = resp;
    //     })
    //   }

    //   public deleteProject(id:number){
    //     return this.http.delete<number>(this.url_project+"/"+id).subscribe(resp =>{
    //       this.respuestaDeleteProject = resp;
    //     }) 
    //   }

    //   /// HOBBIESS /////////////

    //   public addHobbie (body:HobbieModel){
    //     return this.http.post<HobbieModel>(this.url_hobbie, body).subscribe(resp =>{
    //       this.respuestaAddHobbie = resp;
    //     })
    //   }

    //   public postHobbie(body:any){
    //     return this.http.post<any>(this.url_hobbie, body).subscribe(resp =>{
    //       this.respuestaPostHobbie = resp;
    //     })
    //   } 

    //   public deleteHobbie(id:number){
    //     return this.http.delete<number>(this.url_hobbie+"/"+id).subscribe(resp =>{
    //       this.respuestaDeleteHobbie = resp;
    //     }) 
    //   }

    //   // CONTACTS //// 

    //   public postContact(body:any){
    //     return this.http.post<any>(this.url_contact, body).subscribe(resp =>{
    //       this.respuestaPostContact = resp; 
    //     })
    //   }

  }

