import { AuthGuard } from './../seguranca/auth.guard';
import { ResponsavelCadastroComponent } from './responsavel-cadastro/responsavel-cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ResponsavelCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_RESPONSAVEL']}
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ResponsaveisRoutingModule { }
