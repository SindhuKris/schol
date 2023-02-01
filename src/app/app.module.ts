import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const route:Routes =[
  {
    path: "form",
    loadChildren:()=> import('./form/form.module').then(m => m.FormModule)
  },
  {
    path: "login",
    loadChildren:()=> import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: "dashboard",
    loadChildren:()=> import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '**',
    redirectTo: '/form'
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
