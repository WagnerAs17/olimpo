import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';

import { GymPlan } from 'src/app/shared/models/gymplan';

import { GymPlanService } from '../../shared/services/gymplan.service';

@Component({
    selector: 'olp-gymplan',
    templateUrl: './gymplan.component.html',
    styleUrls: ['./gymplan.component.css']
})
export class GymPlanComponent implements OnInit {
    planos: Observable<GymPlan[]>;
    constructor
    (
        private gymPlanService: GymPlanService
    ) { }

    ngOnInit() { 
        this.gymPlanService.getGymPlans().subscribe(planos => {
            setTimeout(() =>{
                this.planos = of(planos?.sort((a, b) => a.valor - b.valor));
            }, 1000)
        });
    }

    calcularDesconto(valor, desconto){
        return valor * desconto / 100
    }
}
