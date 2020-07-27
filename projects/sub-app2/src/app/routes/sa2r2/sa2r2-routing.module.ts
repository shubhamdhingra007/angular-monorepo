import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sa2r2Component } from './sa2r2.component';

const routes: Routes = [{ path: '', component: Sa2r2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sa2r2RoutingModule { }
