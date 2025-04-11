import { AfterViewInit, Component, effect, ElementRef, OnInit, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements AfterViewInit{

  constructor() {
  }
  ngOnInit(){
    

  }
  ngAfterViewInit(): void {
    

  }
  goTo(url: string){
    window.open(url, '_blank');
  }

}
