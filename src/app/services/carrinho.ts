import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/productModel';

@Injectable({
  providedIn: 'root'
})
export class Carrinho {

  private storageKey = 'idearte_cart';

  // Estado do carrinho
  private _items$ = new BehaviorSubject<Product[]>(this.loadFromStorage());
  public items$ = this._items$.asObservable();

  constructor() {}

  // Carrega do localStorage
  private loadFromStorage(): Product[] {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  // Salva no localStorage
  private saveToStorage(list: Product[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(list));
  }

  // Adicionar produto
  add(item: Product) {
    const novos = [...this._items$.value, item];
    this._items$.next(novos);
    this.saveToStorage(novos);
  }

  // Remover produto por ID
  remove(id: string) {
    const novos = this._items$.value.filter(i => i.id !== id);
    this._items$.next(novos);
    this.saveToStorage(novos);
  }

  // Limpar carrinho
  clear() {
    this._items$.next([]);
    this.saveToStorage([]);
  }

  // Total
  getTotal(): number {
    return this._items$.value.reduce((acc, x) => acc + x.preco, 0);
  }
}
