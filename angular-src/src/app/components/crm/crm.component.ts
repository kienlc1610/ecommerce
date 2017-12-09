import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
    selector: 'crm',
    templateUrl: './crm.component.html',
})

export class CRMComponent implements OnInit {
    isLeadView : boolean = false;
    leads : any;

    constructor(private authService: AuthService,
                private router: Router,
                private flashMessagesService: FlashMessagesService) {
    }

    ngOnInit() {

    }

    switchToLeadView() {
        this.isLeadView = true;
    }
}