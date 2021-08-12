import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/shared/services/account.service';

import { UserStoreService } from 'src/app/shared/store/user-store.service'
@Component({
    selector: 'olp-verify-code',
    templateUrl: './verify-code.component.html',
    styleUrls: ['./verify-code.component.css']
})
export class VerifyCodeComponent implements OnInit {
    verifyCodeForm: FormGroup;
    constructor(
        private storeUser: UserStoreService,
        private fb: FormBuilder,
        private accountService: AccountService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.verifyCodeForm = this.fb.group({
            codigo: ['', Validators.required],
            id: ['']
        })
     }

    verifyCode(){
        var verifyCode = this.verifyCodeForm.getRawValue();
        this.storeUser.getUserId().subscribe(id => {
            verifyCode.id = id;
        });


        this.accountService.confirmAccount(verifyCode).subscribe(() => {
            alert("Código confirmado com sucesso")
            this.storeUser.removerUserId();
            this.router.navigate(['/home']);
        }, () =>  alert("Código inválido"))
    }
}
