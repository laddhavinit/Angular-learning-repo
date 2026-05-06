import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() Name:string|undefined

  aboutUser(userName:string|undefined){
    console.log(userName);
    
  }
}
