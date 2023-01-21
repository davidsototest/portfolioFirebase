export class Work{
  name:string="";
  urlPhoto:string="";
  duration:string="";
  job:string="";
  chores: string="";

  constructor(name:string, urlPhoto:string, duration:string, job:string, chores:string){
    this.name=name;
    this.urlPhoto=urlPhoto;
    this.duration=duration;
    this.job=job;
    this.chores=chores;
  }
}
