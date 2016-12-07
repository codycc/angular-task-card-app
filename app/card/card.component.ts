import { Component, Input } from '@angular/core'; 

import { Task } from '../model/task';

@Component ({
    moduleId: module.id,
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.css']
})

export class CardComponent { 
    // setting up the task property
    @Input() task: Task;

    // setting up the toggle status for when a user clicks on a card
    statusToggle() {
        this.task.completed = !this.task.completed;
    }
}