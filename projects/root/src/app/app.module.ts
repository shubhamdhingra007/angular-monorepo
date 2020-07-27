import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SubApp1SharedModule } from 'projects/sub-app1/src/app/app.module';
import { SubApp2SharedModule } from 'projects/sub-app2/src/app/app.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SubApp1SharedModule.forRoot(),
    SubApp2SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
