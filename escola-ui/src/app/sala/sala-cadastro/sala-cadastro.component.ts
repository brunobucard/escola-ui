import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/api';
import { SalaService } from './../sala.service';
import { Component, OnInit } from '@angular/core';
import { Sala } from 'src/app/core/model';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-sala-cadastro',
  templateUrl: './sala-cadastro.component.html',
  styleUrls: ['./sala-cadastro.component.css']
})
export class SalaCadastroComponent implements OnInit {

  sala = new Sala();

  constructor(
    private salaService: SalaService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    const codigoSala = this.route.snapshot.params['codigo'];

    this.title.setTitle('Cadastro de sala');

    if (codigoSala) {
      this.carregarSala(codigoSala);
    }
  }

  get editando() {
    return Boolean(this.sala.codigo);
  }

  carregarSala(codigo: number) {
    this.salaService.buscarPorCodigo(codigo)
      .then(sala => {
        this.sala = sala;

        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarSala(form);
    } else {
      this.adicionarSala(form);
    }
  }

  adicionarSala(form: FormControl) {
    this.salaService.adicionar(this.sala)
      .then(salaAdicionada => {
        this.messageService.add({ severity: 'success', detail: 'Sala adicionada com sucesso!'});
        this.router.navigate(['/salas', salaAdicionada.codigo]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarSala(form: FormControl) {
    this.salaService.atualizar(this.sala)
      .then(sala => {
        this.sala = sala;

        this.messageService.add({ severity: 'success', detail: 'Sala alterada com sucesso!'});
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  nova(form: FormControl) {
    form.reset();

    setTimeout(function() {
      this.sala = new Sala();
    }.bind(this), 1);

    this.router.navigate(['/salas/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de sala ${this.sala.sala}`);
  }


}
