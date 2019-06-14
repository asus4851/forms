import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Сервис для работы с данными по товарам
 */
@Injectable()
export class TasksService {
    public tasks: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

    constructor () {}

    public getTasks (): BehaviorSubject<any> {
        return this.tasks;
    }

    saveTask (dataObj) {
        const currentValue = this.tasks.value;
        const updatedValue = [...currentValue, dataObj];
        this.tasks.next(updatedValue);
    }
}
