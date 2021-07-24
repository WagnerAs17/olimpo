import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { Autenticacao } from '../models/Autenticacao';

@Injectable({
    providedIn: 'root'
})
export class ContaService extends BaseService {
    
    URL_CONTA = "api/v1/conta";
    constructor(protected http: HttpClient){
        super(http);
    }

    autenticarAluno(aluno: Autenticacao){
        return super.postAsync(aluno, `${this.URL_CONTA}/autenticar/cliente`);
    }

    autenticarColaborador(colaborador: Autenticacao){
        return this.postAsync(colaborador, `${this.URL_CONTA}/autenticar/funcionario`);
    }

    confirmarConta(confimarcao: any){
        return this.postAsync(confimarcao, `${this.URL_CONTA}/confirmar`);
    }
}