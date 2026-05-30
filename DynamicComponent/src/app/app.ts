import { Component, signal, ViewChild, ViewContainerRef } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Details } from './details/details';
import { read } from 'fs';

@Component({
  selector: 'app-root',
  imports: [Details],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('DynamicComponent');
  @ViewChild("container",{read: ViewContainerRef})
  container: ViewContainerRef | undefined;

  async loaduserDetails(){
    // console.log("User details");
    const {Details}= await import('./details/details');
    this.container?.createComponent(Details)
  }
}
