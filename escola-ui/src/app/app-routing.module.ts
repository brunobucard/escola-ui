import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaoAutorizadoComponent } from './core/nao-autorizado.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';

const routes: Routes = [

  { path: 'alunos', loadChildren: './aluno/aluno.module#AlunoModule'},
  { path: 'responsaveis', loadChildren: './responsavel/responsavel.module#ResponsavelModule'},
  { path: 'turmas', loadChildren: './turma/turma.module#TurmaModule'},
  { path: 'home', loadChildren: './home/home.module#HomeModule'},
  { path: 'salas', loadChildren: './sala/sala.module#SalaModule'},

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'nao-autorizado', component: NaoAutorizadoComponent },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
