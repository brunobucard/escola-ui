import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './../seguranca/auth.guard';
import { DisciplinaPesquisaComponent } from './disciplina-pesquisa/disciplina-pesquisa.component';


const routes: Routes = [
  {
    path: '',
    component: DisciplinaPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_DISCIPLINA'] }
  },


];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule]
})
export class DisciplinaRoutingModule { }
