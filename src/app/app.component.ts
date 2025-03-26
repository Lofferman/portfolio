import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { DetailsComponent } from './components/details/details.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutContactComponent } from './components/about-contact/about-contact.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio2025';
}
