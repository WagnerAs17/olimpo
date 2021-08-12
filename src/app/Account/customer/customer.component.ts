import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { NgxSpinnerService } from "ngx-spinner";
import { CustomValidators } from 'ngx-custom-validators';
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { ToastrService } from 'ngx-toastr';

import { CustomerService } from './services/customer.service';
import { GymPlanService } from 'src/app/shared/services/gymplan.service';
import { GymPlan } from 'src/app/shared/models/gymplan';
import { Customer } from './models/customer';
import { validationMessage } from './messages/customer-validation-message';
import { FormValidationService } from 'src/app/shared/forms/services/form-validation.service';
import { FormValidation } from 'src/app/shared/forms/validation/form-validation';
import { DisplayMessage } from 'src/app/shared/forms/validation/display-message';
import { UserStoreService } from 'src/app/shared/store/user-store.service'

@Component({
    selector: 'olp-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, AfterViewInit, FormValidation {
    formValidation: FormValidationService;
    displayMessage: DisplayMessage;
    @ViewChildren(FormControlName, { read: ElementRef }) formInputElement: ElementRef[];

    MASK = MASKS;
    customerForm: FormGroup;
    gymPlans: GymPlan[];

    constructor
        (
            private fb: FormBuilder,
            private customerService: CustomerService,
            private gymPlanService: GymPlanService,
            private spinnerService: NgxSpinnerService,
            private toast: ToastrService,
            private userStore: UserStoreService,
            private router: Router
        ) {
        this.formValidation = new FormValidationService(validationMessage);
    }

    ngOnInit(): void {
        this.getGymPlans()
        this.createFormGroup();
    }

    ngAfterViewInit(): void {
        this.formValidation
            .validationForm(this.formInputElement, this.customerForm, this);
    }

    matricular() {
        this.spinnerService.show();
        
        let aluno = this.customerForm.getRawValue() as Customer;
        aluno.cpf = this.onlyNumbersCpf(aluno);

        this.customerService.matricular(aluno).subscribe(data => {
            this.success(data.id);
        }, () => this.error())
    }

    setMessages(displayMessage: DisplayMessage) {
        this.displayMessage = displayMessage;
    }

    private success(id: string){
        this.spinnerService.hide();
        this.userStore.setUserId(id);
        alert("Cadastro realizado com sucesso, favor verificar o código enviado por email !");
        this.router.navigate(['/confirmar-conta']);
    }

    private error(){
        this.spinnerService.hide()
    }

    private getGymPlans() {
        this.spinnerService.show();
        this.gymPlanService.getGymPlans().subscribe(gymPlans => {
            setTimeout(() => {
                this.gymPlans = gymPlans;
                this.spinnerService.hide();
            }, 1000)
        }, () => { alert("Erro"), this.spinnerService.hide() })
    }

    private createFormGroup() {
        let senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])]);
        let senhaConfirmarcao = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(senha)])
        this.customerForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
            nome: ['', [Validators.required]],
            senha: senha,
            senhaConfirmarcao: senhaConfirmarcao,
            dataNascimento: ['', [Validators.required]],
            planoId: ['', [Validators.required]],
        });
    }

    private onlyNumbersCpf(aluno: Customer){
        return aluno.cpf.replace(".", "").replace(".", "").replace("-", "");
    }
}
