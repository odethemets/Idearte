export interface Product {
  id: string;                 // identificador único
  nome: string;               // nome do produto
  descricao: string;          // descrição detalhada
  preco: number;              // preço numérico
  imagem: string;             // caminho da imagem (assets)
  categoria?: string;         // opcional: camisetas, quadros etc.
  estoque?: number;           // opcional: estoque disponível
  quantidade?: number;        // usado somente no carrinho
  destaque?: boolean;         // produto exibido na home
  tags?: string[];            // para buscas e filtros
}
