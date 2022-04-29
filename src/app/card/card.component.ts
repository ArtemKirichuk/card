import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ifCart } from '../if.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() oCard!: ifCart;
  @Input() nIndex!: number;
  @Output() fnDelete:EventEmitter<ifCart> = new EventEmitter();
  sConsTitle: string = 'Название карточки';
  sTitle: string = 'Название карточки';
  sDescription: string = 'Подробное описание карточки';
  sText: string = 'Текст карточки';
  sUrl!: string;
  sUrlAngular: string = './assets/Angular_full_color_logo.svg';
  sUrlVue: string = './assets/Vue.js_Logo_2.svg';
  sColor = '';
  bDisabled = true;
  constructor() {
    this.sUrl = this.sUrlVue;
    this.sTitle = this.sConsTitle;


  }
  fnChNameTitle(value: string) { // event: MouseEvent (event.target as HTMLElement)
    this.sTitle = value;
  }
  fnToggleUrl(imgUrl: string) {
    this.sUrl = this.sUrl == this.sUrlAngular ? this.sUrlVue : this.sUrlAngular;
  }
  fnDeleteCard(){
    
    this.fnDelete.emit(this.oCard);
  }

  ngOnInit(): void {
    this.sUrl = this.sUrlVue;

    this.sTitle = this.oCard.title;
    this.sText = this.oCard.text;

    setTimeout(() => {
      this.sUrl = this.sUrlAngular;
    }, 1000 * 3)
  }
  
}
