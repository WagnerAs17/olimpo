import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSpinnerModule } from "ngx-spinner";

import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
@NgModule({
    declarations: [
        LoginComponent,
        CustomerComponent
    ],
    imports: [ 
        CommonModule, 
        ReactiveFormsModule, 
        FormsModule, 
        RouterModule,
        NgxSpinnerModule
    ],
    exports: [ LoginComponent ],
    providers: [],
})
export class AccountModule {}