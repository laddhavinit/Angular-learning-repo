import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PassingData');
  // username="VinitLaddha"
  arr=signal(["Vinit", "Sam" , "Raj"])
  newUser=signal('')
  
  
  addNewUser(){
    this.arr.update((users)=>[...users, this.newUser()]);
  }
  
  
  selectedUsername=signal('')
  selectedUser(name:string){
    // console.log(name)
    this.selectedUsername.set(name)
  }
  
  deleteUser(name:string){
    console.log(name)
    this.arr.update((data)=>data.filter((item)=>item!=name))
  }
}
