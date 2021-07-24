import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { GymPlan } from '../models/gymplan';

@Injectable({
    providedIn: 'root'
})
export class PlanoService extends BaseService {
    
    URL_PLANOS = "api/v1/planos";
    constructor(protected http: HttpClient){
        super(http);
    }

    obterPlanos(){
        return super.getAsync<GymPlan[]>(this.URL_PLANOS);
    }
}