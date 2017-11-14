import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskMainComponent } from './task-main.component';
import { FormArray } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    TaskMainComponent
  ],
  exports: [
    TaskMainComponent
  ]
})
export class TaskModule { }