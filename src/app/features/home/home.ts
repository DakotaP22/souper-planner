import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  imports: [MatButtonModule, RouterLink],
  selector: 'home',
  styles: ``,
  template: ` 
    <span class="flex-1">
      <a mat-button routerLink="/meals">Explore Meals</a>
      <a mat-button routerLink="/plan">Start Planning</a>
    </span>
  `,
})
export class Home {}
