import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/**
 * Сервис для работы с данными по товарам
 */
@Injectable()
export class TasksService {
    public tasks: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

    constructor(private http: HttpClient) {}

    public getTasks(): BehaviorSubject<any> {
        return this.tasks;
    }

    saveTask(dataObj) {
        const currentValue = this.tasks.value;
        const updatedValue = [...currentValue, dataObj];
        this.tasks.next(updatedValue);
    }

    getName(title) {
        return this.http.get("./assets/httpTest.json", {
        });
    }
}
