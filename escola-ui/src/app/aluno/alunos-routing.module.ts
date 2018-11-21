import { AlunoPesquisaComponent } from './aluno-pesquisa/aluno-pesquisa.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './../seguranca/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: AlunoPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_ALUNO'] }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule]
})
export class AlunosRoutingModule { }
