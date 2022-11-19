import { IconModule } from './../icon/icon.module';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SigninComponent],
  imports: [ReactiveFormsModule, CommonModule, IconModule, FontAwesomeModule]
})
export class HomeModule{
}
