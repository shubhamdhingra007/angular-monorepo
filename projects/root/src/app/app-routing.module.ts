import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from 'libraries/auth/src/public-api';
import { SubApp1SharedModule } from 'projects/sub-app1/src/app/app.module';
import { SubApp2SharedModule } from 'projects/sub-app2/src/app/app.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: AuthComponent },
  { path: 'sa1', loadChildren: () => import('../../../sub-app1/src/app/app.module').then(m => m.AppModule) },
  { path: 'sa2', loadChildren: () => import('../../../sub-app2/src/app/app.module').then(m => m.AppModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SubApp1SharedModule.forRoot(),
    SubApp2SharedModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
