import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(
      private authService : AuthService
  ) { }

  ngOnInit() {
    this.authService.getAllTodos()
        .subscribe(todos => {
          if(todos) {
            todos = todos;
          }
        });
  }

}
