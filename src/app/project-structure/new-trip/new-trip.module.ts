/***
 *    ███╗   ██╗███████╗██╗    ██╗
 *    ████╗  ██║██╔════╝██║    ██║
 *    ██╔██╗ ██║█████╗  ██║ █╗ ██║
 *    ██║╚██╗██║██╔══╝  ██║███╗██║
 *    ██║ ╚████║███████╗╚███╔███╔╝
 *    ╚═╝  ╚═══╝╚══════╝ ╚══╝╚══╝
 *
 *    ████████╗██████╗ ██╗██████╗
 *    ╚══██╔══╝██╔══██╗██║██╔══██╗
 *       ██║   ██████╔╝██║██████╔╝
 *       ██║   ██╔══██╗██║██╔═══╝
 *       ██║   ██║  ██║██║██║
 *       ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝
 *
 *    ███╗   ███╗ ██████╗ ██████╗ ██╗   ██╗██╗     ███████╗
 *    ████╗ ████║██╔═══██╗██╔══██╗██║   ██║██║     ██╔════╝
 *    ██╔████╔██║██║   ██║██║  ██║██║   ██║██║     █████╗
 *    ██║╚██╔╝██║██║   ██║██║  ██║██║   ██║██║     ██╔══╝
 *    ██║ ╚═╝ ██║╚██████╔╝██████╔╝╚██████╔╝███████╗███████╗
 *    ╚═╝     ╚═╝ ╚═════╝ ╚═════╝  ╚═════╝ ╚══════╝╚══════╝
 *
 */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatStepperModule,
  MatRadioModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ReactiveFormsModule } from '@angular/forms';
import { TimepickerHintDirective } from './directives/timepicker-hint.directive';
import { TimePickerModule } from '@progress/kendo-angular-dateinputs';

// MY IMPORTS
import { NewTripComponent } from './components/new-trip/new-trip.component';

// IMPORT MODULES
const ANGULAR_FIRE_MODULES = [];
const ANGULAR_MATERIAL = [
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMomentDateModule,
  MatRadioModule,
  MatSelectModule,
  MatStepperModule
];
const KENDO_UI = [
  TimePickerModule,
];

// MODULE DECLARATION
@NgModule({
  declarations: [
    NewTripComponent,
    TimepickerHintDirective
  ],
  imports: [
    ...ANGULAR_FIRE_MODULES,
    ...ANGULAR_MATERIAL,
    ...KENDO_UI,
    BrowserAnimationsModule,
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports: [ NewTripComponent ]
})
export class NewTripModule { }
