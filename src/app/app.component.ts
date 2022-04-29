import { Component } from '@angular/core';
import { DataService } from './data.service';
import { ifCart,ifCarts } from './if.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'card';
  bToggle: boolean = true;
  aCardsData!:ifCart[];
  dToday!:Date ;
  constructor(dataService:DataService){
    dataService.getData().subscribe((data)=>{ this.aCardsData = data.data});
    debugger;
    this.dToday = new Date()
  }
  
  fnGetData(result:object){
    
     this.aCardsData = (result as ifCarts).data;
  }
  fnDeleteCard(card:ifCart){
    
    this.aCardsData.splice(this.aCardsData.indexOf(card),1);
  }
  fnToggleCards() {
    this.bToggle = !this.bToggle;
  }
}
