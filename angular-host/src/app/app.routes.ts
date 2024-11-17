import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
export const routes: Routes = [
  // {
  //   path: 'react',
  //   component: WebComponentWrapper,
  //   data: {
  //     type: 'script',
  //     remoteEntry: 'http://localhost:3000/remoteEntry.js',
  //     remoteName: 'react_remote_mfe',
  //     exposedModule: './CounterSection',
  //   } as WebComponentWrapperOptions,
  // },
  // {
  //   path: 'react',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: 'http://localhost:3000/remoteEntry.js',
  //       exposedModule: './CounterSection',
  //     }).then((m: any) => m.default),
  // },
  // {
  //   path: 'react',
  //   component: WebComponentWrapper,
  //   data: {
  //     type: 'script',
  //     remoteEntry: 'http://localhost:3000/remoteEntry.js',
  //     remoteName: 'react_remote_mfe',
  //     exposedModule: './CounterSection',
  //     elementName: 'react-counter', // Must match the custom element name defined in React
  //   } as WebComponentWrapperOptions,
  // },
];
