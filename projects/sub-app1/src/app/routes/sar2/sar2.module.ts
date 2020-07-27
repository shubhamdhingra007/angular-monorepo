import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sar2RoutingModule } from './sar2-routing.module';
import { Sar2Component } from './sar2.component';


@NgModule({
  declarations: [Sar2Component],
  imports: [
    CommonModule,
    Sar2RoutingModule
  ]
})
export class Sar2Module { }
