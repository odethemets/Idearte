import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from 'express';

interface ItemCarrinho {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  imagem: string;
}

@Component({
  selector: 'app-carrinho',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {


  itens: ItemCarrinho[] = [
    {
      id: 1,
      nome: "Camiseta Personalizada",
      preco: 59.90,
      quantidade: 1,
      imagem: "https://via.placeholder.com/120?text=Camiseta"
    },
    {
      id: 2,
      nome: "Caneca Idearte",
      preco: 34.90,
      quantidade: 2,
      imagem: "https://via.placeholder.com/120?text=Caneca"
    }
  ];



get total() {
    return this.itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
  }

  remover(id: number) {
    this.itens = this.itens.filter(item => item.id !== id);
  }

  adicionar(id: number) {
    const item = this.itens.find(i => i.id === id);
    if (item) item.quantidade++;
  }

  diminuir(id: number) {
    const item = this.itens.find(i => i.id === id);
    if (item && item.quantidade > 1) item.quantidade--;
  }


}
