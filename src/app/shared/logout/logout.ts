import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout {

  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  fechar() {
    this.close.emit();
  }

  confirmar() {
    this.confirm.emit();
  }
}
