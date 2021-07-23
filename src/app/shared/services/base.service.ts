import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

const urlBase = environment.localhost;
export abstract class BaseService {

    constructor(protected http: HttpClient){}

    protected getAsync<T>(url: string){
        return this.http.get<T>(urlBase + url);
    }

    protected postAsync<T>(payload: T, url: string,  headers: any = {}){
        return this.http.post(url, payload, headers);
    }
}