import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseService } from '../../../shared/services/base.service';
import { Customer } from '../models/customer';
@Injectable({
    providedIn: 'root'
})
export class CustomerService extends BaseService{
    URL_CUSTOMER =  "/api/v1/clientes";
    constructor(protected http: HttpClient){
        super(http);
    }

    async matricular(aluno: Customer){
        return super.postAsync(aluno, this.URL_CUSTOMER); 
    }
}