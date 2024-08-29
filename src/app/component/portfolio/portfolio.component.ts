import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  PortfolioSrc:string[]=[
    './assets/images/poert1.png',
    './assets/images/port2.png',
    './assets/images/port3.png',
    './assets/images/poert1.png',
    './assets/images/port2.png',
    './assets/images/port3.png',

    
  ];
  flag:boolean=true;
  modelImg:string='';
  hideModel(element:EventTarget|null,img:HTMLImageElement):void{
    if (element == img) return;
    this.flag = true ;
     
  }

}
