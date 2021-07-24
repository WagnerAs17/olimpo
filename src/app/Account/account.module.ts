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
@NgModule({
    declarations: [
        LoginComponent,
        CustomerComponent,
        VerifyCodeComponent
    ],
    imports: [ 
        CommonModule, 
        ReactiveFormsModule, 
        FormsModule, 
        RouterModule,
        NgxSpinnerModule,
        TextMaskModule,
        NgBrazil
    ],
    exports: [ LoginComponent ],
    providers: [],
})
export class AccountModule {}