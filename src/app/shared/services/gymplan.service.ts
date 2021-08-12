import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { GymPlan } from '../models/gymplan';

@Injectable({
    providedIn: 'root'
})
export class GymPlanService extends BaseService {
    
    URL_GYMPLANS = "api/v1/planos";
    constructor(protected http: HttpClient){
        super(http);
    }

    getGymPlans(){
        return super.getAsync<GymPlan[]>(this.URL_GYMPLANS);
    }
}