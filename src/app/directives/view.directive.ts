import { ViewRef, Directive, Input, ViewContainerRef, OnDestroy } from '@angular/core';

@Directive({
    selector : '[view]',
})
export class ViewDirective implements OnDestroy {
    constructor(private vcRef: ViewContainerRef) {}

    @Input()
    set view(view: ViewRef) {
        if (view) {
            this.vcRef.clear();
            this.vcRef.insert(view);
        }
    }

    ngOnDestroy() {
        this.vcRef.clear();
    }
}
