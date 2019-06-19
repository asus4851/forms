import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/tasks/components/task/task.component';
import { MatIconModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule } from '@angular/material';
import { TasksService } from './services/tasks.service';
import { SubTaskComponent } from './components/tasks/components/task/components/sub-task/sub-task.component';
import { ViewDirective } from './directives/view.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations : [
        AppComponent,
        TasksComponent,
        TaskComponent,
        SubTaskComponent,
        ViewDirective
    ],
    imports      : [
        BrowserModule,
        AppRoutingModule,
        MatButtonModule,
        MatCheckboxModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatIconModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    providers    : [TasksService],
    bootstrap    : [AppComponent],
    entryComponents:[SubTaskComponent]
})
export class AppModule {}
