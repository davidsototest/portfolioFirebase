import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BannerPresentation } from '../Models/BannerPresentation';
import { EducationModel } from '../Models/Education';
import { HobbieModel } from '../Models/HobbieModel';
import { ProjectModel } from '../Models/ProjectModel';
import { SkillModel } from '../Models/Skill';
import { WordModel } from '../Models/Word';

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


  respuestaPost:BannerPresentation; 
  respuestaWord:any;
  respuestaAddWord:WordModel;
  respuestaDeleteWord:any;
  respuestaEducation:EducationModel;
  respuestaPostEducation: EducationModel;
  respuestaDeleteEdu:any;
  respuestaAddSkill:SkillModel;
  respuestaPostSkill:any;
  respuestaDeleteSkill:any;
  respuestaAddProject:ProjectModel;
  respuestaPostProject:any;
  respuestaDeleteProject:any;
  respuestaAddHobbie: HobbieModel;
  respuestaPostHobbie:any;
  respuestaDeleteHobbie:any;
  respuestaPostContact:any;


  constructor(private http: HttpClient) { 
    this.url_banner = 'https://backendportfoliods.onrender.com/usuario';
    this.url_word = 'https://backendportfoliods.onrender.com/word';
    this.url_education = 'https://backendportfoliods.onrender.com/education';
    this.url_skill = 'https://backendportfoliods.onrender.com/skill';
    this.url_project = 'https://backendportfoliods.onrender.com/project';
    this.url_hobbie = 'https://backendportfoliods.onrender.com/hobbies';
    this.url_contact = 'https://backendportfoliods.onrender.com/contact';
    }

    // BANNER y WORDs//
    public postBanner( body:BannerPresentation){
      return this.http.post<BannerPresentation>(this.url_banner, body).subscribe(resp =>{
        this.respuestaPost = resp;
      })
    }

    public postWord (body:string) {
      return this.http.post<any>(this.url_word, body).subscribe(resp =>{
        this.respuestaAddWord = resp;
      })
    }

    public addWord (body:WordModel){
      return this.http.post<WordModel>(this.url_word, body).subscribe(resp =>{
        this.respuestaWord = resp;
      });
    }

    public deleteWord(id:number){
      return this.http.delete<number>(this.url_word+"/"+id).subscribe(resp =>{
        this.respuestaDeleteWord = resp;
      })
    }
    
    // EDUCATION ///

    public addEdu (body:EducationModel){
      return this.http.post<EducationModel>(this.url_education, body).subscribe(resp =>{
        this.respuestaEducation = resp;
      })
    }

    public postEdu(body:any){
      return this.http.post<any>(this.url_education, body).subscribe(resp =>{
        this.respuestaPostEducation = resp;
      })
    }

    public deleteEdu(id:number){
      return this.http.delete<number>(this.url_education+"/"+id).subscribe(resp =>{
        this.respuestaDeleteEdu = resp;
      }) 
    }

      //// Skills /////

      public addSkill (body:SkillModel){
        return this.http.post<SkillModel>(this.url_skill, body).subscribe(resp =>{
          this.respuestaAddSkill = resp;
        })
      }

      public postSkill(body:any){
        return this.http.post<any>(this.url_skill, body).subscribe(resp =>{
          this.respuestaPostSkill = resp;
        })
      }

      public deleteSkill(id:number){
        return this.http.delete<number>(this.url_skill+"/"+id).subscribe(resp =>{
          this.respuestaDeleteSkill = resp;
        }) 
      }

      // PROJECTS  ////////////

      public addProject (body:ProjectModel){
        return this.http.post<ProjectModel>(this.url_project, body).subscribe(resp =>{
          this.respuestaAddProject = resp;
        })
      }

      public postProject(body:any){
        return this.http.post<any>(this.url_project, body).subscribe(resp =>{
          this.respuestaPostProject = resp;
        })
      }

      public deleteProject(id:number){
        return this.http.delete<number>(this.url_project+"/"+id).subscribe(resp =>{
          this.respuestaDeleteProject = resp;
        }) 
      }

      /// HOBBIESS /////////////

      public addHobbie (body:HobbieModel){
        return this.http.post<HobbieModel>(this.url_hobbie, body).subscribe(resp =>{
          this.respuestaAddHobbie = resp;
        })
      }

      public postHobbie(body:any){
        return this.http.post<any>(this.url_hobbie, body).subscribe(resp =>{
          this.respuestaPostHobbie = resp;
        })
      } 

      public deleteHobbie(id:number){
        return this.http.delete<number>(this.url_hobbie+"/"+id).subscribe(resp =>{
          this.respuestaDeleteHobbie = resp;
        }) 
      }

      // CONTACTS //// 

      public postContact(body:any){
        return this.http.post<any>(this.url_contact, body).subscribe(resp =>{
          this.respuestaPostContact = resp; 
        })
      }

  }

