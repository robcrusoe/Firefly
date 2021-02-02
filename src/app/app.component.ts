import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Firefly';
  count: number = 5;

  getCircleCount(): number {
    return 1;
  }

  getLineCount(): number {
    return 1;
  }
}
