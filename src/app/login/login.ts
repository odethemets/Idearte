import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email = '';
  senha = '';
  erro: string | null = null;   // ⚠️ ADICIONADO

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login() {
    const ok = this.auth.login(this.email, this.senha);

    if (ok) {
      this.erro = null;                                 // limpa erro
      this.router.navigate(['/perfil']);               // redirecionar correto
    } else {
      this.erro = 'Email ou senha incorretos.';        // mensagem exibida no HTML
    }
  }
}
