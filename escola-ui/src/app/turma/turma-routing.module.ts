import { TurmaCadastroComponent } from './turma-cadastro/turma-cadastro.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './../seguranca/auth.guard';

import { TurmaPesquisaComponent } from './turma-pesquisa/turma-pesquisa.component';

const routes: Routes = [
  {
    path: '',
    component: TurmaPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_TURMA'] }
  },
  {
    path: 'novo',
    component: TurmaCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_TURMA'] }
  },


];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule]
})
export class TurmasRoutingModule { }
