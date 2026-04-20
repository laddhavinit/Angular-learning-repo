import { Component } from '@angular/core';

@Component({
  selector: 'app-data-type',
  imports: [],
  templateUrl: './data-type.html',
  styleUrl: './data-type.css',
})
export class DataType {
  name:string="Vinit"
  data:number=12;
  isMale:boolean=true;
  changeName(){
    // This won't work as we have defined name as string
    // this.name=20;
    // this.name=true;
    // this.data="Vinit"
    // this.isMale="Yes";

    
  }
}
