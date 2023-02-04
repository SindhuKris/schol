import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {
    path:'',
    component:RegistrationComponent
  }
]

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
  
    ReactiveFormsModule,
    RouterModule.forChild(route),
  ]
})
export class RegistrationModule { }
