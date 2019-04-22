import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { LogoutService } from './../../seguranca/logout.service';
import { ErrorHandlerService } from './../error-handler.service';
import { AuthService } from './../../seguranca/auth.service';
import { MenuItem } from 'primeng/api';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];

  exibindoMenu = false;

  constructor(
    public auth: AuthService,
    private logoutService: LogoutService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) { }

  ngOnInit() {

    this.items = [
      {
        label: 'Administração',
        items: [
            {label: 'Usuários'},
        ]
    },
      {
          label: 'Coordenação',
          items: [
              {label: 'Sala de aula', routerLink: '/salas'},
              {label: 'Funcionários'},
              {label: 'Disciplinas', routerLink: '/disciplinas'},
              {label: 'Grades curriculares'},
              {label: 'Período letivos'},
              {label: 'Valores'},
          ]
      },
      {
          label: 'Secretaria',
          items: [
              {label: 'Responsável', routerLink: '/responsaveis'},
              {label: 'Aluno', routerLink: '/alunos'},
              {label: 'Turmas', routerLink: '/turmas'},
              {label: 'Matrículas'},
              {label: 'Ocorrências'},
              {label: 'Agenda de eventos'},
              {label: 'Relatórios'},
            ]
      },
      {
          label: 'Diário escolar',
          items: [
              {label: 'Notas'},
              {label: 'Conteúdos ministrados'},
              {label: 'Faltas'},
              {label: 'Relatórios'},
            ]
      },
      {
        label: 'Financeiro',
        items: [
            {label: 'Centros de custo'},
            {label: 'Fornecedores'},
            {label: 'Movimentações'},
            {label: 'Estoque'},
            {label: 'Relatórios'},
          ]
    },
    ];
  }

  logout() {
    this.logoutService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
