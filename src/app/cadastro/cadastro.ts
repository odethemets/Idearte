import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {

  nome = '';
  email = '';
  senha = '';
  senhaConfirm = '';
  erro: string | null = null;
  loading = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  validar(): boolean {
    if (!this.nome.trim() || !this.email.trim() || !this.senha.trim() || !this.senhaConfirm.trim()) {
      this.erro = 'Preencha todos os campos.';
      return false;
    }

    if (this.senha.length < 4) {
      this.erro = 'A senha deve ter pelo menos 4 caracteres.';
      return false;
    }

    if (this.senha !== this.senhaConfirm) {
      this.erro = 'As senhas não coincidem.';
      return false;
    }

    this.erro = null;
    return true;
  }

  registrar() {
    if (!this.validar()) return;

    const ok = this.auth.register({
      nome: this.nome.trim(),
      email: this.email.trim(),
      senha: this.senha
    });

    if (ok) {
      this.router.navigate(['/login']);
    } else {
      this.erro = 'Já existe uma conta com esse email.';
    }
  }
}
