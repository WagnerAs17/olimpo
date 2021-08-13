import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";

import { environment } from '../../../environments/environment';

const urlBase = environment.localhost;
export abstract class BaseService {

    constructor(protected http: HttpClient){}

    protected getAsync<T>(url: string){
        return this.http.get<T>(urlBase + url)
            .pipe(
                map(this.extractData),
                catchError(this.serviceError)
            );
    }

    protected postAsync<T>(payload: any, url: string){
        return this.http.post<T>(urlBase + url, payload)
            .pipe(map(this.extractData), catchError(this.serviceError));
    }

    protected serviceError(response: Response | any){
        console.log("serviceError");
        console.log(response);
        let customError: string[] = [];

        if(response instanceof HttpErrorResponse){
            if(response.statusText === 'Unknown Error'){
                customError.push('Ocorreu um erro desconhecido');
                alert("erro")
                response.error.errors = customError;
            }
        }

        return throwError(response);
    }

    protected extractData(response: any){
        return response?.data || {};
    }
}