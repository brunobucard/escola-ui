import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './../seguranca/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_ALUNO']}
   },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule]
})
export class HomeRoutingModule { }
