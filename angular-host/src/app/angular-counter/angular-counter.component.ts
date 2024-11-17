import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-counter',
  standalone: true,
  imports: [],
  templateUrl: './angular-counter.component.html',
  styleUrl: './angular-counter.component.css',
})
export class AngularCounterComponent {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
