import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { NgxSpinnerService } from "ngx-spinner";

import { Autenticacao } from '../../shared/models/Autenticacao';
import { ContaService } from '../../shared/services/conta.service';
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
        private contaService: ContaService,
        private spinnerService: NgxSpinnerService
    ) { }

    ngOnInit(): void { 
        this.loginForm = this.fb.group({
            email: [''],
            senha: ['']
        })
    }

    autenticarAluno(){
        let aluno = this.loginForm.getRawValue() as Autenticacao;
        this.spinnerService.show();
        this.contaService.autenticarAluno(aluno).subscribe(() => {
            setTimeout(() => {
                this.spinnerService.hide();
            }, 1000)
        });
    }

    autenticarColaborador(){
        let colaborador = this.loginForm.getRawValue() as Autenticacao;
        this.spinnerService.show();
        this.contaService.autenticarAluno(colaborador).subscribe(() => {
            setTimeout(() => {
                this.spinnerService.hide();
            }, 1000)
        });
    }
}
