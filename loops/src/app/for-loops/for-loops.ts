import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loops',
  imports: [],
  templateUrl: './for-loops.html',
  styleUrl: './for-loops.css',
})
export class ForLoops {
  // users=['Vinit','Anil','Sam','Alex']
  employees=[
    {name:'Vinit', age:22, email: 'vinit.laddha@comprinno.net'},
    {name:'Raj', age:23, email: 'raf@comprinno.net'},
    {name:'Sam', age:21, email: 'sam@comprinno.net'},
    {name:'Alex', age:24, email: 'alex@comprinno.net'}
  ]

  getName(name:string){
    console.log(name)
  }
}
