import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ifCarts } from './if.component';

@Injectable({providedIn: 'root'})
export class DataService {
  
  constructor(private httpClient: HttpClient) { 
    
  }
  getData(  ) {
    return this.httpClient.get<ifCarts>('./assets/data.json')
  }
}

