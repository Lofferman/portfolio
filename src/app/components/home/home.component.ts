import { Component, OnInit } from '@angular/core';
import { AboutContactComponent } from '../about-contact/about-contact.component';
import { DetailsComponent } from '../details/details.component';
import { HeroComponent } from '../hero/hero.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, DetailsComponent, ProjectsComponent, AboutContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  ngAfterViewInit(){
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
  });
  }
  ngOnInit(){
    
  }
}
