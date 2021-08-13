import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NgxSpinnerService } from "ngx-spinner";

import { AccountService } from 'src/app/shared/services/account.service';
import { UserStoreService } from 'src/app/shared/store/user-store.service';
@Component({
    selector: 'olp-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
    passwordForm: FormGroup;
    constructor
    (
        private accountService: AccountService,
        private userStore: UserStoreService,
        private spinnerService: NgxSpinnerService,
        private router: Router
    ) { }

    ngOnInit(): void { 
        this.passwordForm = new FormGroup({
            email: new FormControl('', Validators.required)
        }, Validators.required)
    }

    sendConfirmCodePassword(){
        this.spinnerService.show();
        let email = this.passwordForm.getRawValue();

        this.accountService.sendCodeEmail(email)
            .subscribe(resp => {
                this.success(resp);
            }, () => this.error());
    }

    private success(response: any){
        this.userStore.setUserId(response.id);
        this.spinnerService.hide();
        this.router.navigate(['/nova-senha']);
    }

    private error(){
        alert("Um erro ocorreu")
    }
}
