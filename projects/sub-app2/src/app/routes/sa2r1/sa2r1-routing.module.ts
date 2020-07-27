import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sa2r1Component } from './sa2r1.component';

const routes: Routes = [{ path: '', component: Sa2r1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sa2r1RoutingModule { }
