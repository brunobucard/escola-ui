import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplinaPesquisaComponent } from './disciplina-pesquisa/disciplina-pesquisa.component';
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
import { DisciplinaRoutingModule } from './disciplina-routing.module';
import { DisciplinaCadastroComponent } from './disciplina-cadastro/disciplina-cadastro.component';

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
    DisciplinaRoutingModule
  ],
  declarations: [
    DisciplinaPesquisaComponent,
    DisciplinaCadastroComponent
  ]
})
export class DisciplinaModule { }
