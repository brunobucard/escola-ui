import { SharedModule } from './../shared/shared.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { InputMaskModule } from 'primeng/inputmask';
import { KeyFilterModule } from 'primeng/keyfilter';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurmaPesquisaComponent } from './turma-pesquisa/turma-pesquisa.component';
import { TurmasRoutingModule } from './turma-routing.module';
import { TurmaCadastroComponent } from './turma-cadastro/turma-cadastro.component';

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
    TurmasRoutingModule
  ],
  declarations: [
    TurmaPesquisaComponent,
    TurmaCadastroComponent
  ]
})
export class TurmaModule { }
