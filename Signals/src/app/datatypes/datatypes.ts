import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-datatypes',
  imports: [],
  templateUrl: './datatypes.html',
  styleUrl: './datatypes.css',
})
export class Datatypes {
  // We can make signal of multiple datatype
  // To define datatype of value inside signal
  // data=signal<number | string | boolean>(20);

// To define datatype and value of signal, use this method
  data : WritableSignal<number | string>= signal(20)

  updateSignal(){
    this.data.set("Datatype and Value changed of signal to 'string'")
  }
}
