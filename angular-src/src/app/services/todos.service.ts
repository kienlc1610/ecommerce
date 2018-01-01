import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
    authToken: any;
    user: any;
    isDev: boolean;

    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }

    constructor(private http: Http) {
        debugger;
        this.isDev = true; // Change to false before deployment
    }

    prepEndpoint(ep) {
        if (this.isDev) {
            return ep;
        } else {
            return 'http://localhost:8080/' + ep;
        }
    }

    getAllTodos() {
        var headers = new Headers();
        this.loadToken();
        var ep = this.prepEndpoint("todos");
        headers.append("Authentication", this.authToken);
        headers.append("Content-Type", "application/json");
        return this.http.get(ep, {headers: headers}).map(res => res.json());
    }

    createTodo(data) {
        if (!data) {
            console.log("Invalid data provided");
        } else {
            var headers = new Headers();
            var ep = this.prepEndpoint("todos/create");
            headers.append("Content-Type", "application/json");
            return this.http.post(ep, {headers: headers, data: data}).map(res => res.json());
        }
    }

    editTodo(data) {

    }

    deleteTodo(data) {

    }
}
