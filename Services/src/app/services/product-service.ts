import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(){
    console.log("Service Called");
  }
  getProducts(){
    return [
      {id:1, name:'Adi'},
      {id:2, name:'Raj'},
      {id:3, name:'Vinit'}
    ]
  }
}
