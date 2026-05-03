import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwitchCase } from './switch-case/switch-case';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SwitchCase],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('IfElse');

  display=true
  x=10
  

  hideDiv(){
    this.display=false;
  }

  showDiv(){
    this.display=true
  }

  toggleDiv(){
    this.display=!this.display
  }
}
