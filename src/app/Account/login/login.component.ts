import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NgxSpinnerService } from "ngx-spinner";

import { Autenticacao } from '../../shared/models/Autenticacao';
import { AccountService } from '../../shared/services/account.service';
@Component({
    selector: 'olp-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    displayMessage: any;
    loginForm:FormGroup;

    constructor
    (
        private fb: FormBuilder, 
        private accountService: AccountService,
        private spinnerService: NgxSpinnerService,
        private router: Router
    ) { }

    ngOnInit(): void { 
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            senha: ['', Validators.required]
        })
    }

    authCustomer(){
        let aluno = this.loginForm.getRawValue() as Autenticacao;
        this.spinnerService.show();
        this.accountService.authCustomer(aluno).subscribe(() => {
            setTimeout(() => {
                this.spinnerService.hide();
                this.router.navigate(['/home']);
            }, 1000)
        }, () => this.spinnerService.hide());
    }

    authEmployee(){
        let colaborador = this.loginForm.getRawValue() as Autenticacao;
        this.spinnerService.show();
        this.accountService.authEmployee(colaborador).subscribe(() => {
            setTimeout(() => {
                this.spinnerService.hide();
            }, 1000)
        });
    }

    isValidField(field: string){
        let formControl = this.loginForm.get(field);
        return formControl.invalid && 
            formControl.dirty && 
            formControl.errors;
    }
}
