import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Data } from '../models/data';
import { GymPlan } from '../models/gymplan';
const urlBase = environment.localhost + 'api/v1/planos';
@Injectable({
    providedIn: 'root'
})
export class PlanoService {
    constructor(private http: HttpClient){}

    obterPlanos(){
        return this.http.get<Data<GymPlan[]>>(urlBase);
    }
}