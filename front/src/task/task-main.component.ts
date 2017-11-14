import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';

import { TaskService } from './task.service'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-main',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskMainComponent implements OnInit {

  newTaskForm: FormGroup;
  formVisible: boolean;
  constructor(private tskService: TaskService,
              private fb: FormBuilder) 
    { 
      this.newTaskForm = this.fb.group({
        'title' : new FormControl(),
        'description': new FormControl(),
        'dueDate': new FormControl()
      });
      this.formVisible = false;
    }

  ngOnInit() {
    
  }

  onSubmit(){

  }

  getFormVisible(){
   return this.formVisible;
  }

  toggleFormVisibility(){
    this.formVisible = !this.formVisible
  }

}
