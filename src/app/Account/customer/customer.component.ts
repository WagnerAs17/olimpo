import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { NgxSpinnerService } from "ngx-spinner";


import { CustomerService } from './services/customer.service';
import { PlanoService } from 'src/app/shared/services/plano.service';
import { GymPlan } from 'src/app/shared/models/gymplan';

@Component({
    selector: 'olp-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
    customerForm: FormGroup;
    planos: GymPlan[];
    defaultValue ="Selecione um plano";
    constructor
    (
        private fb: FormBuilder,
        private customerService: CustomerService,
        private planoService: PlanoService,
        private spinnerService: NgxSpinnerService
    ) { }

    ngOnInit(): void {
        this.spinnerService.show();
        this.planoService.obterPlanos().subscribe(resp => {
            setTimeout(() => {
                this.planos = resp.data;
                this.spinnerService.hide();
            }, 1000)
        }, err => {alert("Erro"), this.spinnerService.hide()})
        this.customerForm = this.fb.group({
            email: [''],
            cpf: [''],
            nome: [''],
            senha: [''],
            senhaConfirmarcao: [''],
            dataNascimento: [''],
            planoId: [''],
        });
    }

    matricular(){
        alert(JSON.stringify(this.customerForm.getRawValue()))
    }

    mudou(){

        console.log(this.customerForm.get('planoId').value);
    }
}
