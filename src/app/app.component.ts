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
  aCartsData!:ifCart[];
  
  constructor(dataService:DataService){
    dataService.getData().subscribe((data)=>{ this.aCartsData = data.data});
  }
  
  fnGetData(result:object){
    
     this.aCartsData = (result as ifCarts).data;
  }
  fnToggleCards() {
    this.bToggle = !this.bToggle;
  }
}
