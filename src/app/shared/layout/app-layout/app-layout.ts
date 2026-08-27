import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, RouterLink],
  selector: 'app-layout',
  styles: ``,
  template: ` 
    <mat-toolbar>
      <span>Souper Planner</span>

      <span class="flex-1"></span>

      <a mat-button routerLink="/home">Home</a>
      <a mat-button routerLink="/meals">Meals</a>
      <a mat-button routerLink="/plan">Plan</a>
    </mat-toolbar>
    <router-outlet />
  `,
})
export class AppLayout {}
