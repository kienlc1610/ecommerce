import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
    authToken: any;
    user: any;
    isDev: boolean;

    constructor(private http: Http) {
        this.isDev = true; // Change to false before deployment
    }

    registerUser(user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/register');
        return this.http.post(ep, user, {headers: headers})
            .map(res => res.json());
    }

    authenticateUser(user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/authenticate');
        return this.http.post(ep, user, {headers: headers})
            .map(res => res.json());
    }

    getProfile(userId) {
        var headers = new Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/profile');
        return this.http.post(ep, {headers: headers, userId : userId})
            .map(res => res.json());
    }

    storeUserData(token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }

    loadToken() {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
    }

    loggedIn() {
        return tokenNotExpired();
    }

    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }

    prepEndpoint(ep) {
        if (this.isDev) {
            return ep;
        } else {
            return 'http://localhost:8080/' + ep;
        }
    }
}
