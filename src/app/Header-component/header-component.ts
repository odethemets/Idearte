import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})
export class HeaderComponent {

  @Output() toggle = new EventEmitter<void>();

  search: string = '';

  constructor(private router: Router) {}

  realizarBusca() {
    if (!this.search.trim()) return;

    this.router.navigate(['/produtos'], {
      queryParams: { q: this.search }
    });
  }
}
