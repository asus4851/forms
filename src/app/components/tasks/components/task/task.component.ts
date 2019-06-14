import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../../../../services/tasks.service';

@Component({
    selector    : 'app-task',
    templateUrl : './task.component.html',
    styleUrls   : ['./task.component.css'],
})
export class TaskComponent implements OnInit {
    public taskForm: FormGroup;

    constructor (private formBuilder: FormBuilder, private tasksService: TasksService) { }

    ngOnInit () {
        this.taskForm = this.formBuilder.group({
            title       : new FormControl(
                '',
                [
                    Validators.required,
                    Validators.minLength(2),
                ],
            ),
            description : new FormControl(
                '',
                [
                    Validators.required,
                    Validators.minLength(2),
                ],
            ),
            assigned    : new FormControl(
                '',
                [
                    Validators.required,
                    Validators.minLength(2),
                ],
            ),
        });
    }

    saveTask () {
       this.tasksService.saveTask(this.taskForm.getRawValue());
    }

}
