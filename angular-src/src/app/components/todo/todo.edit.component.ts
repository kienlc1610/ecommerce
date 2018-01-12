import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import { Router } from "@angular/router";
import { TodoService } from "../../services/todos.service";

@Component({
    selector: 'app-todo-edit',
    templateUrl: './todo.edit.component.html'
})
export class TodoEditComponent implements OnInit {
    name : String;
    description : String;
    startDate : Date;
    endDate : Date;
    editData : Object;

    constructor(
        private flashMessagesService :  FlashMessagesService,
        private router : Router,
        private TodoService : TodoService
    ) {};

    ngOnInit() {
    }

    editTodo(data) {
        const dataTodo = {
            name : data.name,
            description : data.description,
            startDate : data.startDate,
            endDate : data.endDate
        };

        this.TodoService.editTodo(dataTodo)
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

    clearEditTodo() {
        this.editData = {};
    }
}