import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Router } from "@angular/router";
import { TodoService } from "../../services/todos.service";

@Component({
    selector: 'app-todo-create',
    templateUrl: './todo.create.component.html'
})
export class TodoCreateComponent implements OnInit {
    name : String;
    description : String;
    startDate : Date;
    endDate : Date;

    constructor(
        private flashMessagesService :  FlashMessagesService,
        private router : Router,
        private TodoService : TodoService
    ) {};

    ngOnInit() {
    }

    onTodoSubmit() {
        const dataTodo = {
            name : this.name,
            description : this.description || null,
            startDate : this.startDate,
            endDate : this.endDate
        };

        if(!dataTodo.name) {
            this.flashMessagesService.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
            return;
        } else {
            /* Continue */
        }

        this.TodoService.createTodo(dataTodo)
            .subscribe(newTodo => {
                if(newTodo) {
                    this.flashMessagesService.show("Todo created successfully", {cssClass: 'alert-success', timeout: 3000});
                    this.router.navigate(['/dashboard/todos']);
                } else {
                    this.flashMessagesService.show("Something went wrong", {cssClass: 'alert-danger', timeout : 3000});
                    this.router.navigate(['/dashboard/todos-create']);
                }
            });
    }
}