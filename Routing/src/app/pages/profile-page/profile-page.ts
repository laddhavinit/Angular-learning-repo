import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  imports: [],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage {
  name=signal('');
  id=signal(0);
  age=signal(0);
  
  constructor(public route:ActivatedRoute){}
  ngOnInit(){
    this.route.queryParams.subscribe((callbackParams)=>{
      console.log(callbackParams),
      // this.name.set(callbackParams['name']);
      this.name.set(callbackParams['name']);
      this.id.set(callbackParams['id']);
      this.age.set(callbackParams['age']);
    })
  }
}
