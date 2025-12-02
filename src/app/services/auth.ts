import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

// ========================
// TIPAGEM FORA DA CLASSE
// ========================
export interface RegisterPayload {
  nome: string;
  email: string;
  senha: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private storageKey = 'idearte_user';

  private _user$ = new BehaviorSubject<User | null>(this.loadFromStorage());
  public user$ = this._user$.asObservable();

  constructor() {}

  // ======================================================
  // MÉTODOS PRIVADOS
  // ======================================================

  private loadFromStorage(): User | null {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }

  private saveToStorage(user: User | null) {
    if (user) {
      localStorage.setItem(this.storageKey, JSON.stringify(user));
    } else {
      localStorage.removeItem(this.storageKey);
    }
  }

  // ======================================================
  // LOGIN
  // ======================================================

  login(email: string, senha: string): boolean {
    const usuariosFake: User[] = [
      {
        id: '1',
        nome: 'cliente',
        email: 'cliente@idearte.com',
        tipo: 'cliente'
      },
      {
        id: '2',
        nome: 'admin',
        email: 'admin@idearte.com',
        tipo: 'admin'
      }
    ];

    const encontrado = usuariosFake.find(u => u.email === email);

    const senhaCorreta =
      (email === 'cliente@idearte.com' && senha === '1234') ||
      (email === 'admin@idearte.com' && senha === 'admin');

    if (encontrado && senhaCorreta) {
      this._user$.next(encontrado);
      this.saveToStorage(encontrado);
      return true;
    }

    return false;
  }

  // ======================================================
  // CADASTRO
  // ======================================================

  register(payload: RegisterPayload): boolean {
    try {
      const raw = localStorage.getItem('idearte_users');
      const users: User[] = raw ? JSON.parse(raw) : [];

      if (users.find(u => u.email === payload.email)) {
        return false; // e-mail já existe
      }

      // -------------- CORREÇÃO IMPORTANTE ----------------
      const newUser: User = {
        id: String(Date.now()),
        nome: payload.nome,
        email: payload.email,
        tipo: 'cliente'  // ✔ agora respeita o tipo literal do model User
      };
      // --------------------------------------------------

      users.push(newUser);
      localStorage.setItem('idearte_users', JSON.stringify(users));

      // loga automaticamente
      this._user$.next(newUser);
      this.saveToStorage(newUser);

      return true;
    } catch (err) {
      console.error('Erro no cadastro:', err);
      return false;
    }
  }

  // ======================================================
  // LOGOUT
  // ======================================================

  logout() {
    this._user$.next(null);
    this.saveToStorage(null);
  }

  // ======================================================
  // STATUS DO USUÁRIO
  // ======================================================

  getUser(): User | null {
    return this._user$.value;
  }

  isLogged(): boolean {
    return this._user$.value !== null;
  }

  isAdmin(): boolean {
    return this._user$.value?.tipo === 'admin';
  }
}
