import { Component } from '@angular/core';
import { Lessons01Component } from './lessons01/lessons01.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Lessons01Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';  
}