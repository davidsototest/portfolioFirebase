export class Projects{
  name_project:string="";
  url_Photo_project:string="";
  url_button_project:string="";
  stake_project:string="";
  description_project:string="";


  constructor(name_project:string, url_Photo_project:string, url_button_project:string, stake_project:string, description_project:string){
    this.name_project=name_project;
    this.url_Photo_project=url_Photo_project;
    this.url_button_project=url_button_project;
    this.stake_project=stake_project;
    this.description_project=description_project;
  }
}
