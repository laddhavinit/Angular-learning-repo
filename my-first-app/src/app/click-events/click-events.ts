import { Component } from '@angular/core';

@Component({
  selector: 'app-click-events',
  imports: [],
  templateUrl: './click-events.html',
  styleUrl: './click-events.css',
})
export class ClickEvents {
  handleEvent(event:any){
    console.log("Funciton called type: ",event.type)
    console.log("Funciton class: ",event.target.class)

  }
}
