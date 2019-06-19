import {
    ChangeDetectorRef,
    Component,
    ComponentFactoryResolver, ElementRef,
    OnInit,
    QueryList,
    ViewChild,
    ViewChildren,
    ViewContainerRef,
} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../../../../services/tasks.service';
import { SubTaskComponent } from './components/sub-task/sub-task.component';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
    selector    : 'app-task',
    templateUrl : './task.component.html',
    styleUrls   : ['./task.component.css'],
})
export class TaskComponent implements OnInit {
    public taskForm: FormGroup;
    public subTask: FormArray;
    public counter = 0;
    titles = [];

    private elements: SubTaskComponent[] = [];
    @ViewChild('container', { read : ViewContainerRef }) container: ViewContainerRef;

    constructor(
        private formBuilder: FormBuilder,
        private tasksService: TasksService,
        private changeDetectorRef: ChangeDetectorRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        // private viewContainerRef: ViewContainerRef,
    ) { }

    ngOnInit() {

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

        this.taskForm.valueChanges.pipe(
            debounceTime(400),
            switchMap(task => this.tasksService.getName(task.title)),
            ).
            subscribe(response => {
                this.titles = response['test'];
            });
    }

    saveTask() {
        if (this.taskForm.valid) {
            this.tasksService.saveTask(this.taskForm.getRawValue());
            this.taskForm.reset();
        }
    }

    createSubTask() {
        const resolve = this.componentFactoryResolver.resolveComponentFactory(SubTaskComponent);
        const componentInstance = this.container.createComponent(resolve);
        componentInstance.instance.index = this.counter;
        this.counter++;
        componentInstance.instance['formReady'].subscribe(event => {
            this.subTask.push(event);
        });
        componentInstance.instance['remove'].subscribe(event => {
            this.subTask.removeAt(event);
            componentInstance.destroy();
        });
        const newItem: SubTaskComponent = componentInstance.instance;
        this.elements.push(newItem);
        this.changeDetectorRef.detectChanges();
    }
}
