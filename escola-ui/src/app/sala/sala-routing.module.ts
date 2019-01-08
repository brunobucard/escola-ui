import { SalaCadastroComponent } from './sala-cadastro/sala-cadastro.component';


import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './../seguranca/auth.guard';
import { SalaPesquisaComponent } from './sala-pesquisa/sala-pesquisa.component';



const routes: Routes = [
  {
    path: '',
    component: SalaPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_SALA'] }
  },
  {
    path: 'nova',
    component: SalaCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_SALA'] }
  },
  {
    path: ':codigo',
    component: SalaCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_SALA'] }
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule]
})
export class SalasRoutingModule { }
