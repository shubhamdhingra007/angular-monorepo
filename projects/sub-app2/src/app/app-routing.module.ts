import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'sa2/r1', loadChildren: () => import('./routes/sa2r1/sa2r1.module').then(m => m.Sa2r1Module) },
  { path: 'sa2/r2', loadChildren: () => import('./routes/sa2r2/sa2r2.module').then(m => m.Sa2r2Module) },
  { path: 'sa2', redirectTo: 'sa2/r1' },
  { path: '', pathMatch: 'full', redirectTo: 'sa2/r1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
