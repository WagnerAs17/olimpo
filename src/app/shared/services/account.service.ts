import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { Autenticacao } from '../models/Autenticacao';

@Injectable({
    providedIn: 'root'
})
export class AccountService extends BaseService {
    
    URL_ACCOUNT = "api/v1/contas";
    constructor(protected http: HttpClient){
        super(http);
    }

    authCustomer(aluno: Autenticacao){
        return super.postAsync(aluno, `${this.URL_ACCOUNT}/autenticar/cliente`);
    }

    authEmployee(colaborador: Autenticacao){
        return this.postAsync(colaborador, `${this.URL_ACCOUNT}/autenticar/funcionario`);
    }

    confirmAccount(confimarcao: any){
        return this.postAsync(confimarcao, `${this.URL_ACCOUNT}/confirmar`);
    }

    sendCodeEmail(email: any){
        return this.postAsync(email, `${this.URL_ACCOUNT}/codigo-confirmacao`);
    }

    newPasswordUser(newPassoword: any){
        return this.postAsync(newPassoword, `${this.URL_ACCOUNT}/nova-senha`);
    }
}