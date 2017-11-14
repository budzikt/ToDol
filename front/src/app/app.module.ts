import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http'

import { TaskService } from './../task/task.service'

import { AppComponent } from './app.component';
import { TaskModule } from './../task/task.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TaskModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
