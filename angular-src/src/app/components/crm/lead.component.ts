import {Component, OnInit} from "@angular/core";
import { AuthService } from "../../services/auth.service";
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
    selector : 'lead-component',
    templateUrl : './lead.component.html',
    styleUrls : ['./lead.component.css']
})

export class LeadComponent implements OnInit {
    leads : Array<Object> = [];

    constructor(
        private authService : AuthService
    ){}

    ngOnInit() {
        this.authService.getAllLeads().subscribe(
            dbLeads => {
                this.leads = dbLeads.leads;
            }, err => {
                console.log(err);
                return false;
            }
        )
    }
}