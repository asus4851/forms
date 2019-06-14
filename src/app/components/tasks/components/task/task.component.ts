import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../../../../services/tasks.service';

@Component({
    selector    : 'app-task',
    templateUrl : './task.component.html',
    styleUrls   : ['./task.component.css'],
})
export class TaskComponent implements OnInit {
    public taskForm: FormGroup;
    public subTask: FormArray;

    countSubTasks = 0;
    subTaskArray = [];

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
        this.subTask = this.formBuilder.array([]);

        this.taskForm.setControl('subTasks', this.subTask);
    }

    saveTask () {
        if (this.taskForm.valid) {
            this.tasksService.saveTask(this.taskForm.getRawValue());
            this.taskForm.reset();
            this.subTaskArray = [];
        }
    }

    subTaskInit (event) {
        this.subTask.push(event);
    }

    createSubTask () {
        this.subTaskArray.push(this.countSubTasks);
        this.countSubTasks++;
    }

    removeSubTask (i) {
        console.log(i);
        console.log(this.subTask);
        console.log(this.subTaskArray);
        this.subTask.removeAt(i);
        let index = this.subTaskArray.indexOf(i);
        if (index > -1) {
            this.subTaskArray.splice(index, 1);
        }
        this.countSubTasks--;
    }

}
