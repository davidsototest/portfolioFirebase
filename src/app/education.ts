export class Education{
  name_education:string="";
  url_Photo_education:string="";
  place_education:string="";
  duration_education:string="";
  level_education: string="";

  constructor(name_education:string, url_Photo_education:string, place_education:string, duration_education:string, level_education:string){
    this.name_education=name_education;
    this.url_Photo_education=url_Photo_education;
    this.place_education=place_education;
    this.duration_education=duration_education;
    this.level_education=level_education;
  }
}
