import { Injectable } from '@angular/core';
import { Project } from '../_models/projects';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects : Project[] = [
    {id:0,name: 'Angular App',summary: 'Building a personal portfolio with Angular 17',description: '',projectLink: 'www.github.com',tags: [Tag.ANGULAR,Tag.Typescript],pictures: []},
    {id:1,name: 'Python project',summary: 'Building a ViT model for lung nodules classification',description: '',projectLink: 'www.github.com',tags: [Tag.Python,Tag.ViT,Tag.Deep_learning],pictures: []},
    {id:2,name: 'Raspberry Pi project',summary: 'monitoring of a DC motor with a Raspberry Pi board',description: '',projectLink: 'www.github.com',tags: [Tag.Raspberry_Pi,Tag.Flask,Tag.Mysql],pictures: []},
    {id:3,name: 'Flutter App',summary: 'Building a flutter app for intelligent diet informations',description: '',projectLink: 'www.github.com',tags: [Tag.Flutter,Tag.Firebase,Tag.Machine_learning,Tag.MS_Azure,Tag.XGBoost,Tag.Python],pictures: ["../../assets/1.png","../../assets/2.png",'../../assets/3.png']},
    {id:4,name: 'Machine learning project',summary: 'Building a deep learning model for barcode detection and extraction',description: '',projectLink: 'www.github.com',tags: [Tag.Machine_learning,Tag.Pytorch,Tag.Python],pictures: []}
  
    ];
  constructor() { }
  GetProjects(){
    return this.projects;
  }
  GetProjectById(id : number) : Project {
    let project= this.projects.find(project => project.id===id)
    if(project=== undefined){
      throw new TypeError('There is no project with the id '+ id);
    }
    return project;
  }
  GetProjectsByFilter(filterTags: Tag[]){
    let filteredProjects: Project[]=[];
    this.projects.forEach(function(project) {
      let foundAll=true;
      filterTags.forEach(function(filterTag){
        if (project.tags.includes(filterTag)== false){
          foundAll=false; 
        }
      });
      if (foundAll){
        filteredProjects.push(project);
      }
    });
    return filteredProjects
  }
}


