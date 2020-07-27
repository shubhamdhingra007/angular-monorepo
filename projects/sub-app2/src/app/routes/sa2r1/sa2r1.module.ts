import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sa2r1RoutingModule } from './sa2r1-routing.module';
import { Sa2r1Component } from './sa2r1.component';


@NgModule({
  declarations: [Sa2r1Component],
  imports: [
    CommonModule,
    Sa2r1RoutingModule
  ]
})
export class Sa2r1Module { }
