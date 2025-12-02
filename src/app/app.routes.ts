import { Routes } from '@angular/router';
import { Home } from './home/home';
import path from 'path';
import { Produtos } from './produtos/produtos';
import { ProdutoDetalhe } from './produto-detalhe/produto-detalhe';
import { Carrinho } from './carrinho/carrinho';
import { Login } from './login/login';
import { Cadastro } from './cadastro/cadastro';
import { AuthService } from './services/auth';
import { AuthGuard } from './guards/guard';
import { Perfil } from './perfil/perfil';

export const routes: Routes = [
      { path: '', component: Home },
      {path:"produtos", component:Produtos},
  { path: 'produto/:id', component: ProdutoDetalhe },
 { path: 'carrinho', component: Carrinho   },
   { path: 'login', component: Login },
  { path: 'cadastro', component: Cadastro },
  { path: 'usuario', component: Perfil, canActivate: [AuthGuard] },  
  { path: '**', redirectTo: '' },
];
