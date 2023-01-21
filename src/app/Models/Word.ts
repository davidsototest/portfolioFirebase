
export class WordModel{
    name_business:string;
    job:string;
    chores:string;
    duration:string;
    url_photo_business:string;

    constructor(name: string, job:string, chores:string, duration:string, urlLogo:string){
    this.name_business = name;
    this.job = job;
    this.chores = chores;
    this.duration = duration;
    this.url_photo_business = urlLogo;
    }


}


