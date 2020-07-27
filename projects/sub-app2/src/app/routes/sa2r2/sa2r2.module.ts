import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sa2r2RoutingModule } from './sa2r2-routing.module';
import { Sa2r2Component } from './sa2r2.component';


@NgModule({
  declarations: [Sa2r2Component],
  imports: [
    CommonModule,
    Sa2r2RoutingModule
  ]
})
export class Sa2r2Module { }
