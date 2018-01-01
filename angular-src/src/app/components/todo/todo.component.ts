import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../services/todos.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    public todos : any[];

  constructor(
      private TodoService : TodoService
  ) { }

  ngOnInit() {
    this.TodoService.getAllTodos()
        .subscribe(todos => {
            if(todos && todos.todos) {
                if(todos.todos.length) {
                    this.todos = todos.todos;
                }
            }
          debugger;
        });
  }

}
