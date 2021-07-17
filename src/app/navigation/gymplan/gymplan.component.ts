import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';

import { NgxSpinnerService } from "ngx-spinner";

import { GymPlan } from 'src/app/shared/models/gymplan';

import { PlanoService } from '../../shared/services/plano.service';

@Component({
    selector: 'olp-gymplan',
    templateUrl: './gymplan.component.html',
    styleUrls: ['./gymplan.component.css']
})
export class GymPlanComponent implements OnInit {
    planos: Observable<GymPlan[]>;
    constructor
    (
        private planoService: PlanoService, 
        private spinnerService: NgxSpinnerService
    ) { }

    ngOnInit(): void { 
        this.spinnerService.show();
        this.planoService.obterPlanos().subscribe(planos => {
            setTimeout(() =>{
                this.planos = of(planos?.data.sort((a, b) => a.valor - b.valor));
                this.spinnerService.hide();
            }, 1000)
        })
    }

    calcularDesconto(valor, desconto){
        return valor * desconto / 100
    }
}
