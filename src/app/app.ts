import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './Header-component/header-component';
import { Footer } from "./footer/footer";
import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    Sidebar,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Idearte');
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
