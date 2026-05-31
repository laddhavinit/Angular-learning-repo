import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ReactiveForms');
  email=new FormControl("")
  pass=new FormControl("")

  login(){
    console.log(this.email.value);
    console.log(this.pass.value);
    
  }
}
