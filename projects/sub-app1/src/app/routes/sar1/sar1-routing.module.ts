import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sar1Component } from './sar1.component';

const routes: Routes = [{ path: '', component: Sar1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sar1RoutingModule { }
