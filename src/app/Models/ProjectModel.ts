export class ProjectModel{
    name_project:string;
    description_project:string;
    url_photo_project:string;
    url_project:string;

    constructor(name: string, descripProject:string, urlFotoProject:string, urlProject:string){
    this.name_project = name;
    this.description_project = descripProject;
    this.url_photo_project = urlFotoProject;
    this.url_project = urlProject;
    }


}