import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ngx-custom-validators';

import { FormValidationService } from 'src/app/shared/forms/services/form-validation.service';
import { DisplayMessage } from 'src/app/shared/forms/validation/display-message';
import { FormValidation } from 'src/app/shared/forms/validation/form-validation';
import { ValidationMessage } from 'src/app/shared/forms/validation/validation-message';
import { AccountService } from 'src/app/shared/services/account.service';
import { UserStoreService } from 'src/app/shared/store/user-store.service';

@Component({
    selector: 'olp-new-password',
    templateUrl: './new-password.component.html',
    styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit, AfterViewInit, FormValidation {
    newPasswordForm: FormGroup;
    displayMessage: any;
    formValidation: FormValidationService;
    @ViewChildren(FormControlName, { read: ElementRef }) formInputElement: ElementRef[];
    constructor
    (
        private fb: FormBuilder,
        private accountService: AccountService,
        private router: Router,
        private userStore: UserStoreService
    )
    { 
        this.formValidation = new FormValidationService(this.generateMessagesValidation());
    }

    ngOnInit(): void {
        this.createFormGroup();
    }

    ngAfterViewInit(): void {
        this.formValidation
            .validationForm(this.formInputElement, this.newPasswordForm, this);
    }

    
    setMessages(displayMessage: DisplayMessage) {
        this.displayMessage = displayMessage;
    }

    create() {
        var newPassword = this.newPasswordForm.getRawValue();

        this.accountService.newPasswordUser(newPassword)
            .subscribe(resp => {
                this.success(resp);
            }, () => this.error());
    }

    private success(response: any) {
        this.router.navigate(['/login']);
    }

    private error() {
        alert("Algo deu errado");
    }

    private createFormGroup() {
        let senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])]);
        let senhaConfirmacao = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(senha)]);

        let userId = '';
        this.userStore.getUserId()
            .subscribe(id => userId = id);

        this.newPasswordForm = this.fb.group({
            id: [userId],
            senha,
            senhaConfirmacao,
            codigo: ['', Validators.required]
        })
    }

    private generateMessagesValidation() : ValidationMessage{
        return {
            codigo: {
                required: 'Informe o código de confirmação',
            },
            senha: {
                required: '* A senha é obrigatória <br>',
                rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
            },
            senhaConfirmacao: {
                required: '* Informe a confirmação de senha <br>',
                rangeLength: '* A senha deve possuir entre 6 e 15 caracteres <br>',
                equalTo: '* As senhas não conferem'
            }
        }
    }
}
