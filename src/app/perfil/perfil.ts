import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Logout } from '../shared/logout/logout';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, Logout],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {

  showLogout = false;
  user: any = null;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    this.user = this.auth.getUser();

    this.auth.user$.subscribe(u => {
      this.user = u;
    });
  }

  // ================================
  // BOTÃO PRINCIPAL DO PERFIL
  // ================================
  logout() {
    this.openLogout();     // chama o modal
  }

  // ================================
  // CONTROLA O MODAL <app-logout>
  // ================================
  openLogout() {
    this.showLogout = true;
  }

  closeLogout() {
    this.showLogout = false;
  }

  logoutConfirmado() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
