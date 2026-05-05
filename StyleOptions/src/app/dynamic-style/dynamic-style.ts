import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-style',
  imports: [],
  templateUrl: './dynamic-style.html',
  styleUrl: './dynamic-style.css',
})
export class DynamicStyle {
  bgcolor="red"
  fontSize="30px"
  zoom=true
  bigFontSize="50px"
}
