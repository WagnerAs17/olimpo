import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSpinnerModule } from "ngx-spinner";
import { NgBrazil } from 'ng-brazil' 
import { TextMaskModule } from 'angular2-text-mask';

import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { VerifyCodeComponent } from './security/verify-code/verify-code.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { ErrorModule } from 'src/app/shared/components/error/error.module';
@NgModule({
    declarations: [
        LoginComponent,
        CustomerComponent,
        VerifyCodeComponent,
        ForgotPasswordComponent,
        NewPasswordComponent
    ],
    imports: [ 
        CommonModule, 
        ReactiveFormsModule, 
        FormsModule, 
        RouterModule,
        NgxSpinnerModule,
        TextMaskModule,
        NgBrazil,
        ErrorModule
    ],
    exports: [ LoginComponent ],
    providers: [],
})
export class AccountModule {}