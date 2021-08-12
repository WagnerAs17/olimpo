import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class UserStoreService{
    
    private storeSuject = new BehaviorSubject<any>(null);
    
    setUserId(id: string){
        alert("Id: " +  JSON.stringify(id))
        this.storeSuject.next(id);
    }

    getUserId(){
        return this.storeSuject;
    }

    hasUserId(){
        this.storeSuject.subscribe(id => {
            if(id){
                return true;
            }
        });

        return false;
    }

    removerUserId(){
        this.storeSuject.next(null);
    }
}