import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { DetailsComponent } from './components/details/details.component';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, DetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio2025';
}
