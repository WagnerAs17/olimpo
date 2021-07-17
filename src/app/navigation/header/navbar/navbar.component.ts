import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'olp-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    public isCollapsed = false;
    constructor() {
    }

    ngOnInit() {
    }
    
}
