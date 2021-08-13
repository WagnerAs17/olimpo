import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'olp-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
    @Input() errors;
    constructor() { }

    ngOnInit(): void { }
}
