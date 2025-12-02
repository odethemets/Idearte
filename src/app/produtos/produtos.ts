import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


interface Produto {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
}

@Component({
  selector: 'app-produtos',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {

produtos: Produto[] = [
    {
      id: 1,
      nome: 'Camiseta Personalizada',
      preco: 59.90,
      imagem: 'https://via.placeholder.com/300x200?text=Camiseta'
    },
    {
      id: 2,
      nome: 'Caneca Idearte',
      preco: 34.90,
      imagem: 'https://via.placeholder.com/300x200?text=Caneca'
    },
    {
      id: 3,
      nome: 'Panfletos 10x15',
      preco: 45.00,
      imagem: 'https://via.placeholder.com/300x200?text=Panfletos'
    },
    {
      id: 4,
      nome: 'Cartões de Visita',
      preco: 29.90,
      imagem: 'https://via.placeholder.com/300x200?text=Cartoes'
    }
  ];

}
