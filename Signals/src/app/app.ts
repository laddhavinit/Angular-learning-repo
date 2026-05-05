import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Datatypes } from './datatypes/datatypes';
import { ComputedSignal } from './computed-signal/computed-signal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Datatypes, ComputedSignal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Signals');

  count=signal(10);
  x=20;

  constructor(){
    effect(()=>{
      console.log(this.count());
    })
  }
  updateValue(){
    this.count.set(this.count()+1)
  }

  // It wont work as it is not signal
  // constructor(){
  //   effect(()=>{
  //     console.log(this.x)
  //   })
  // }
  // updateValue(){
  //   this.x=this.x+1
  //   // this.count.set(this.count()+1)
  // }
}
