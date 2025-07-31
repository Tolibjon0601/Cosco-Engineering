import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterModule],
  template: `
  <style>
    app-layout {
      display: block;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .container {
      @apply max-w-7xl mx-auto px-4 w-full;
    }

    main {
      flex: 1 1 auto;
    }
  </style>

  <ng-container>
    <div class="container">
      <app-header></app-header>
    </div>

    <main class="flex-1">
      <router-outlet></router-outlet>
    </main>

    <div class="flex-1">
      <app-footer></app-footer>
    </div>
  </ng-container>
`,

})
export class LayoutComponent {
}
