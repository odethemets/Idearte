import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  imagem: string;
}

@Component({
  selector: 'app-produto-detalhe',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './produto-detalhe.html',
  styleUrl: './produto-detalhe.css',
})
export class ProdutoDetalhe implements OnInit {

  produto!: Produto;

  produtosFake: Produto[] = [
    {
      id: 1,
      nome: 'Camiseta Personalizada',
      preco: 59.90,
      descricao: "Camiseta personalizada de alta qualidade.",
      imagem: 'https://via.placeholder.com/400x300?text=Camiseta'
    },
    {
      id: 2,
      nome: 'Caneca Idearte',
      preco: 34.90,
      descricao: "Caneca personalizada ideal para presente.",
      imagem: 'https://via.placeholder.com/400x300?text=Caneca'
    },
    {
      id: 3,
      nome: 'Panfletos 10x15',
      preco: 45.00,
      descricao: "Panfletos impressos em alta resolução.",
      imagem: 'https://via.placeholder.com/400x300?text=Panfletos'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produto = this.produtosFake.find(p => p.id === id)!;
  }

  adicionarAoCarrinho() {
    console.log("Produto adicionado ao carrinho:", this.produto.nome);
  }

}
