import { ChangeDetectorRef, Component, ComponentRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector    : 'app-sub-task',
    templateUrl : './sub-task.component.html',
    styleUrls   : ['./sub-task.component.css'],
})
export class SubTaskComponent implements OnInit {
    @Output() formReady = new EventEmitter();
    @Output() remove = new EventEmitter();
    @Input() i: number = null;
    public subTaskForm: FormGroup;
    public index: number = null;

    constructor(
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit() {
        this.subTaskForm = this.formBuilder.group({
            title       : new FormControl(
                '',
            ),
            description : new FormControl(
                '',
            ),
        });
        this.formReady.emit(this.subTaskForm);
    }

    removeSubTask() {
        this.remove.emit(this.index);
    }

}
