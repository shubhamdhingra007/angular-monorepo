import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sar2Component } from './sar2.component';

const routes: Routes = [{ path: '', component: Sar2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sar2RoutingModule { }
