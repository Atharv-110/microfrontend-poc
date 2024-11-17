import { Component } from '@angular/core';
import { CounterWrapperComponent } from './counter-wrapper/counter-wrapper.component';
import { RouterModule } from '@angular/router';
import { AngularCounterComponent } from './angular-counter/angular-counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterWrapperComponent, RouterModule, AngularCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-host';
}
