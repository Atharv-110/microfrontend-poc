import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { ReactWrapperService } from '../react-wrapper.service';

@Component({
  selector: 'app-counter-wrapper',
  standalone: true,
  templateUrl: './counter-wrapper.component.html',
})
export class CounterWrapperComponent implements AfterViewInit, OnDestroy {
  @ViewChild('counterContainer', { static: true })
  counterContainer!: ElementRef;

  private ReactCounter: any;

  constructor(private reactWrapperService: ReactWrapperService) {}

  async ngAfterViewInit() {
    const CounterModule = await loadRemoteModule({
      remoteEntry: 'http://localhost:3000/remoteEntry.js',
      remoteName: 'react_remote_mfe',
      exposedModule: './CounterSection',
    });

    this.ReactCounter = CounterModule.default;

    this.reactWrapperService.mountReactComponent(
      this.ReactCounter,
      this.counterContainer
    );
  }

  ngOnDestroy() {
    this.reactWrapperService.unmountReactComponent(this.counterContainer);
  }
}
