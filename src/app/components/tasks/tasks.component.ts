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
//    public checkoutForm: FormGroup;
//    public productsFormArray: FormArray;

//    public products = [1, 2];
    tasks = [];

    constructor (
        private formBuilder: FormBuilder,
        private tasksService: TasksService,
    ) { }

    ngOnInit () {
        this.tasksService.getTasks().subscribe(tasks => {
            this.tasks = tasks;
        });
    }

//
//    onSubmit () {
//        console.log('submit');
//    }
//
//    public formInitialized (name: string, form: FormGroup): void {
//        this.checkoutForm.setControl(name, form);
//    }
//
//    productPush (product) {
//        this.productsFormArray.push(product);
//    }
}
