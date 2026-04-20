import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrialComponent } from './trial-component/trial-component';
import { DataType } from './data-type/data-type';
import { Counter } from './counter/counter';
import { ClickEvents } from './click-events/click-events';
import { GetSetValue } from './get-set-value/get-set-value';

@Component({
  selector: 'app-root',
  imports: [TrialComponent, DataType, Counter, ClickEvents, GetSetValue],
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
