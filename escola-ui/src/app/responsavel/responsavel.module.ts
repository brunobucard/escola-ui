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
import { ResponsaveisRoutingModule } from './responsaveis-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsavelCadastroComponent } from './responsavel-cadastro/responsavel-cadastro.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/components/common/shared';
import { ResponsavelPesquisaComponent } from './responsavel-pesquisa/responsavel-pesquisa.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    AngularFontAwesomeModule,
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

    SharedModule,
    ResponsaveisRoutingModule

  ],
  declarations: [
    ResponsavelCadastroComponent,
    ResponsavelPesquisaComponent
  ]
})
export class ResponsavelModule { }
