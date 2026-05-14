import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Datatypes } from './datatypes/datatypes';
import { ComputedSignal } from './computed-signal/computed-signal';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Datatypes, ComputedSignal, FormsModule ],
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


  // Getter Setter in Signals
  userName=signal("Vinit")

  
  get uName(){
    return this.userName()
  }
  
  set uName(val:string){
    this.userName.set(val)
  }

  // Using getter and setters in objects
  empData=signal({
    empName: "LV",
    salary: 1500000
  })
  
  get eName(){
    return this.empData().empName
  }
  set eName(val2){
    this.empData.update(item=>({...item, empName:val2}))
    console.log(this.eName);
    
  }
}
