import { Component } from '@angular/core';

@Component({
  selector: 'app-trial-component',
  imports: [],
  templateUrl: './trial-component.html',
  styleUrl: './trial-component.css',
})
export class TrialComponent {
  clickButton(){
    alert("Button Clicked")
    this.innerFunction();
  }

  innerFunction(){
    console.log("Inner function called")
  }
}
