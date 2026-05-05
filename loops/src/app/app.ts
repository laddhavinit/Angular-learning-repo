import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ForLoops } from './for-loops/for-loops';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ForLoops],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('loops');
}
