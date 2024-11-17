import { Injectable, ElementRef } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

@Injectable({
  providedIn: 'root',
})
export class ReactWrapperService {
  private reactRoots = new Map<ElementRef, ReactDOM.Root>();

  mountReactComponent(
    reactComponent: React.FunctionComponent | React.ComponentClass,
    container: ElementRef,
    props: Record<string, any> = {}
  ): void {
    const containerElement = container.nativeElement;

    const reactElement = React.createElement(reactComponent, props);

    const root = ReactDOM.createRoot(containerElement);
    root.render(reactElement);
    this.reactRoots.set(container, root);
  }

  unmountReactComponent(container: ElementRef): void {
    const root = this.reactRoots.get(container);
    if (root) {
      root.unmount();
      this.reactRoots.delete(container);
    }
  }
}
