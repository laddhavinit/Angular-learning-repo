import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrialComponent } from './trial-component/trial-component';

@Component({
  selector: 'app-root',
  imports: [TrialComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-app');
  name="Vinit";
  age=22;
  getName(){
    return this.name;
  }
  sum(a:number,b:number){
    return a+b
  }
}
