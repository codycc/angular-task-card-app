import { Component } from '@angular/core';
import { Task } from './model/task';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent { 
    private tasks = [
        new Task(
            "buy a monkey",
            false
        ),
        new Task(
            "walk the monkey",
            false
        )
    ]
    private currentTask = new Task(null, false);

    addTask() {
        let task = new Task(this.currentTask.content, this.currentTask.completed);
        this.tasks.push(task);
        this.currentTask.content = null; 
    }
 }