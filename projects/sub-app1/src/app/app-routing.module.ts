import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'sa1/sar1', loadChildren: () => import('./routes/sar1/sar1.module').then(m => m.Sar1Module) },
  { path: 'sa1/sar2', loadChildren: () => import('./routes/sar2/sar2.module').then(m => m.Sar2Module) },
  { path: 'sa1', redirectTo: 'sa1/sar1' },
  { path: '', pathMatch: 'full', redirectTo: 'sa1/sar1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
