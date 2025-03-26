import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  TECH_PROJECTS = [
    {
      name:'Five3One',
      description:'A strength-building companion application designed around the 5/3/1 program, a proven training protocol centered on progressive overload. This program prioritizes gradual, consistent muscle and strength development for sustained growth.',
      image:'img/bull.jpg',
      tech_list:['Flutter', 'Material Design'],
      demo_link:'/blog/five3one',
      repo_link:'https://github.com/Lofferman/five3one',
    },
    {
      name:'Portfolio',
      description:'My professional summary and personal projects',
      image:'img/portfolio_img.jpg',
      tech_list:['Angular', 'Bootstrap', 'SCSS', 'Typescript'],
      demo_link:'/',
      repo_link:'https://github.com/Lofferman',
      technical: true
    },    
  ];
   
  NON_RELEVENT_PROJECTS = [
    {
      name:'Off-Grid Meshtastic Comms',
      description:"Meshtastic is a messaging system that uses low-power radios to enable communication between devices without relying on cellular networks or Wi-Fi. It's especially useful in areas with limited phone service, as it allows users to send text messages and share GPS locations over long distances using mesh networking.",
      image:'img/meshtastic.png',
      tech_list:['Radio Freq', 'esp32', 'C++'],
      about_link:'/blog/mesh',
    },
    {
      name:'WeatherMan',
      description:'A Chrome extension that provides real-time weather updates.',
      image:'svg/weather.svg',
      tech_list:['HTML', 'JavaScript', 'JQuery'],
      repo_link:'https://github.com/Lofferman/WeatherMan',
    },   
  ];


  goTo(url: string){
    window.open(url, '_blank');
  }
  

}
