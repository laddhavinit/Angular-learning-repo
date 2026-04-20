import { Component } from '@angular/core';

@Component({
  selector: 'app-get-set-value',
  imports: [],
  templateUrl: './get-set-value.html',
  styleUrl: './get-set-value.css',
})
export class GetSetValue {
  name=""
  displayName=""

  GetName(event:Event){
    this.name= ((event.target as HTMLInputElement).value)
    // console.log(this.name)
  }
  SetName(){
    this.name="Vinit"
  }

  ShowName(){
    this.displayName=this.name
  }
}
