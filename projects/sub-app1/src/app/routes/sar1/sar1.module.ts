import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sar1RoutingModule } from './sar1-routing.module';
import { Sar1Component } from './sar1.component';


@NgModule({
  declarations: [Sar1Component],
  imports: [
    CommonModule,
    Sar1RoutingModule
  ]
})
export class Sar1Module { }
