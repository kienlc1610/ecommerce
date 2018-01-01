import {Component, OnInit} from "@angular/core";
import { AuthService } from "../../services/auth.service";
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
    selector : 'lead-create-component',
    templateUrl : './lead.create.component.html'
})

export class LeadComponent implements OnInit {
    leads : Array<Object> = [];

    constructor(
        private authService : AuthService
    ){}

    ngOnInit() {
    }
}