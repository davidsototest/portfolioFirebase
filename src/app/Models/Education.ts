
export class EducationModel{
    name_education:string;
    level_education:string;
    duration_education:string;
    place_education:string;
    url_photo_education:string;

    constructor(name: string, nivel:string, duration:string, academia:string, url_Logo:string){
    this.name_education = name;
    this.level_education = nivel;
    this.duration_education = duration;
    this.place_education = academia;
    this.url_photo_education = url_Logo;
    }


}