import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BannerPresentation } from '../Models/BannerPresentation';

@Injectable({
  providedIn: 'root'
})
export class ServiceBackEndService {
  url_banner='https://backendportfoliods.onrender.com/usuario/1';
  url_word='https://backendportfoliods.onrender.com/word';
  url_education = 'https://backendportfoliods.onrender.com/education';
  url_skill = 'https://backendportfoliods.onrender.com/skill';
  url_project = 'https://backendportfoliods.onrender.com/project';
  url_hobbies = 'https://backendportfoliods.onrender.com/hobbies';
  url_contacts = 'https://backendportfoliods.onrender.com/contact';
  

  constructor(private http:HttpClient) {
    
  }

    getBanner(){
      let header = new HttpHeaders()
      .set('Type-content', 'aplication/BannerPresentation')
      return this.http.get<BannerPresentation>(this.url_banner, {headers: header});
    }

    getWord(){
      let word = new HttpHeaders()
      .set('Type-content', 'aplication/any[]')
      return this.http.get<any[]>(this.url_word, {headers: word});
    }

    getEducation(){
      let education = new HttpHeaders()
      .set('Type-content', 'aplication/any[]')
      return this.http.get<any[]>(this.url_education, {headers: education});
    }

    getSkill(){
      let skill = new HttpHeaders()
      .set('Type-content', 'aplication/any[]')
      return this.http.get<any[]>(this.url_skill, {headers: skill});
    }

    getProject(){
      let project = new HttpHeaders()
      .set('Type-content', 'aplication/any[]')
      return this.http.get<any[]>(this.url_project, {headers: project});
    }

    getHobbies(){
      let hobbies = new HttpHeaders()
      .set('Type-content', 'aplication/any[]')
      return this.http.get<any[]>(this.url_hobbies, {headers: hobbies});
    }

    getContact(){
      let contact = new HttpHeaders()
      .set('Type-content', 'aplication/any[]')
      return this.http.get<any[]>(this.url_contacts, {headers: contact});
    }

    // getContact(){
    //   let contact = new HttpHeaders()
    //   .set('Type-content', 'aplication/ContactModel')
    //   return this.http.get<ContactModel>(this.url_contacts, {headers: contact});
    // } 

    // public getContact(){
    //   return this.http.get<ContactModel>(this.url_contacts);
    //   }
}
