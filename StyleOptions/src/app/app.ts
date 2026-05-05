import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';
import { DynamicStyle } from './dynamic-style/dynamic-style';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Profile, DynamicStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('StyleOptions');
}
