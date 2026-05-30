import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
// import { Router } from 'express';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(public route:Router){}
  userData=signal({
    id:1, name:'Vinit', age:23
  })

  goToProfile(){
    this.route.navigate(['profile'],{
      queryParams:{
        id:10,
        name:'Amy',
        age:25
      }
    })
  }
}
