import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';

@Component({
    selector      : 'app-tasks',
    templateUrl   : './tasks.component.html',
    styleUrls     : ['./tasks.component.css'],
    encapsulation : ViewEncapsulation.None,
})
export class TasksComponent implements OnInit {

    /**
     * Форма чекаута (главная форм группа всего чекаута)
     */
    tasks = [];

    constructor(
        private formBuilder: FormBuilder,
        private tasksService: TasksService,
    ) { }

    ngOnInit() {
        this.tasksService.getTasks().subscribe(tasks => {
            this.tasks = tasks;
        });
    }

}
