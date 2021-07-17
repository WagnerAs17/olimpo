import { Component, Input, OnInit } from '@angular/core';

import { GymPlan } from 'src/app/shared/models/gymplan';

@Component({
    selector: 'olp-gymplan-details',
    templateUrl: './gymplan-details.component.html',
    styleUrls: ['./gymplan-details.component.css'],
})
export class GymPlanDetailsComponent implements OnInit {
    isCollapsed = true;
    @Input() plano: GymPlan;
    @Input() desconto;

    constructor() { }

    ngOnInit(): void { }
}
