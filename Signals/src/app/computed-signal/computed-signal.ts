import { Component, computed, signal } from '@angular/core';
import { sign } from 'crypto';

@Component({
  selector: 'app-computed-signal',
  imports: [],
  templateUrl: './computed-signal.html',
  styleUrl: './computed-signal.css',
})
export class ComputedSignal {
  
  // This wont show updated value
  // x=signal(10)
  // y=signal(25)
  // z=this.x()+this.y()

  // showVal(){
  //   console.log(this.z());
  //   this.x.set(40)
    // console.log(this.z()); //It will still print same result as value of z is not changed
  // }


  // x=signal(10)
  // y=signal(25)
  // z=computed(()=>this.x()+this.y())

  // showVal(){
  //   console.log(this.z());
  //   this.x.set(40)
  //   console.log(this.z());
  // }


}
