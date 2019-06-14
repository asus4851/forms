import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector      : 'app-checkout',
    templateUrl   : './checkout.component.html',
    styleUrls     : ['./checkout.component.css'],
    encapsulation : ViewEncapsulation.None,
})
export class CheckoutComponent implements OnInit {

    /**
     * Форма чекаута (главная форм группа всего чекаута)
     */
    public checkoutForm: FormGroup;

    public products = [1, 2];

    constructor (
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit () {
        this.checkoutForm = this.formBuilder.group({});
    }

    onSubmit () {
        console.log('submit');
    }

    public formInitialized (name: string, form: FormGroup): void {
        this.checkoutForm.setControl(name, form);
    }
}
