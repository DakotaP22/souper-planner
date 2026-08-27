import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-layout',
  styles: ``,
  template: ` 
    <p>app-layout works!</p>
    <router-outlet />
  `,
})
export class AppLayout {}
