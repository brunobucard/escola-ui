

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

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule]
})
export class SalasRoutingModule { }
