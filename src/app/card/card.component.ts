import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  sConsTitle:string = 'Название карточки';
  sTitle:string  = 'Название карточки';
  sDescription:string = 'Подробное описание карточки';
  sText:string = 'Текст карточки';
  sUrl!:string;
  sUrlAngular:string = './assets/Angular_full_color_logo.svg';
  sUrlVue:string = './assets/Vue.js_Logo_2.svg';
  sColor = '';
  bDisabled = true;
  constructor() { 
    this.sUrl= this.sUrlVue;
    this.sTitle = this.sConsTitle;
  }
  fnChNameTitle(value:string){
    // event: MouseEvent
    // this.sTitle = (event.target as HTMLElement).textContent as string;
    
    this.sTitle = value;
  }
  fnToggleUrl(imgUrl:string){
    this.sUrl =  this.sUrl == this.sUrlAngular ? this.sUrlVue : this.sUrlAngular;
  }


  ngOnInit(): void {
    this.sUrl= this.sUrlVue;
    setTimeout(()=>{
      this.sUrl= this.sUrlAngular;
    },1000*3)
  }

}
