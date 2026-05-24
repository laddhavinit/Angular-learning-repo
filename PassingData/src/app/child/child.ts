import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'node:stream';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  // To import data from parent
  @Input() Name:string|undefined
  
  // To export data from child to parent
  @Output() selectedUser = new EventEmitter()

  aboutUser(name:string|undefined){
    // console.log(userName);  
    this.selectedUser.emit(name)
  }

  @Output() deleteUser = new EventEmitter()

  delete(name:string|undefined){
    // console.log(userName);
    this.deleteUser.emit(name)
  }
}
