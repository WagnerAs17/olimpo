import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContaService } from 'src/app/shared/services/conta.service';

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
        private contaService: ContaService
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
            alert("ID" + id);
            verifyCode.id = id;
        });


        this.contaService.confirmarConta(verifyCode).subscribe(() => {
            alert("Código confirmado com sucesso")
        }, () =>  alert("Código inválido"))
    }
}
