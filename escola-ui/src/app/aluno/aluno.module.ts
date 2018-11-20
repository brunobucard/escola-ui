import { AlunoCadastroComponent } from './aluno-cadastro/aluno-cadastro.component';
import { AlunosRoutingModule } from './alunos-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoPesquisaComponent } from './aluno-pesquisa/aluno-pesquisa.component';
import { AlunoGridComponent } from './aluno-grid/aluno-grid.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputMaskModule } from 'primeng/inputmask';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    KeyFilterModule,
    InputMaskModule,
    TabViewModule,
    RadioButtonModule,
    CheckboxModule,
    AngularFontAwesomeModule,

    SharedModule,
    AlunosRoutingModule
  ],
  declarations: [
    AlunoPesquisaComponent,
    AlunoGridComponent,
    AlunoCadastroComponent
  ],

  exports: [

  ]
})
export class AlunoModule { }
