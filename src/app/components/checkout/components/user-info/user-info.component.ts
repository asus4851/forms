import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector    : 'app-user-info',
    templateUrl : './user-info.component.html',
    styleUrls   : ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
    @Output() formReady = new EventEmitter();

    public userInfoForm: FormGroup;

    constructor (private formBuilder: FormBuilder) { }

    ngOnInit () {
        this.initForm();
    }

    /**
     * Инициализирует форму контактных данных пользователя
     */
    private initForm (): void {
        this.userInfoForm = this.formBuilder.group({
            name : new FormControl(
                '',
                [
                    Validators.required,
                    Validators.minLength(2),
                ],
            ),
        });
        this.formReady.emit(this.userInfoForm);
    }
}
