import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {SelectButtonModule} from 'primeng/selectbutton';
import {DropdownModule} from 'primeng/dropdown';
import {KeyFilterModule} from 'primeng/keyfilter';
import {InputMaskModule} from 'primeng/inputmask';
import {TabViewModule} from 'primeng/tabview';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';


import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { FormsModule } from '@angular/forms';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';

import { AppComponent } from './app.component';
import { AlunoModule} from './aluno/aluno.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,


    AlunoModule,
    SegurancaModule,
    CoreModule,
    AppRoutingModule,

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
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
