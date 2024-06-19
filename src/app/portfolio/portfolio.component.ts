import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'
import { Project } from '../_models/projects';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projects={} as Project[];

  isCollapsed: boolean=true;
  Typescript: boolean=false;
  Angular: boolean=false;
  Python: boolean=false;
  Flutter: boolean=false;
  Raspberry_Pi: boolean=false;

  filtering: boolean=false;

  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Fedi Bouabid - Portfolio');
  }
  ngOnInit(): void {
    this.projects= this.projectService.GetProjects();
  }

  Filter(){
    let filterTags: Tag[]=[];
    if (this.Typescript){
      filterTags.push(Tag.Typescript);
    }
    if (this.Angular){
      filterTags.push(Tag.ANGULAR);
    }
    if (this.Python){
      filterTags.push(Tag.Python);
    }
    if (this.Raspberry_Pi){
      filterTags.push(Tag.Raspberry_Pi);
    }
    if (this.Flutter){
      filterTags.push(Tag.Flutter);
    }
    if (this.Angular|| this.Python|| this.Flutter|| this.Raspberry_Pi||this.Typescript){
      this.filtering=true;
    }
    else{
      this.filtering=false;
    }
    this.projects=this.projectService.GetProjectsByFilter(filterTags);

  }
  ResetFilters(){
    this.Python=false;
    this.Angular=false;
    this.Typescript=false;
    this.Flutter=false;
    this.Raspberry_Pi=false;
    this.filtering=false;

    this.projects=this.projectService.GetProjects();
  }
}


