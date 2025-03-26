import { Component } from '@angular/core';

@Component({
  selector: 'app-about-contact',
  imports: [],
  templateUrl: './about-contact.component.html',
  styleUrl: './about-contact.component.scss'
})
export class AboutContactComponent {
  goTo(url: string){
    window.open(url, '_blank');
  }
}
