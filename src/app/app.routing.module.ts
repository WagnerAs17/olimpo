import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './Account/customer/customer.component';
import { LoginComponent } from './Account/login/login.component';
import { HomeComponent } from './navigation/home/home.component';
import { VerifyCodeComponent } from './Account/security/verify-code/verify-code.component';
import { ForgotPasswordComponent } from './Account/forgot-password/forgot-password.component';
import { NewPasswordComponent } from './Account/new-password/new-password.component';
import { NewPasswordLoad } from './Account/new-password/services/new-password-load';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'login', component : LoginComponent },
    { path: 'matricular', component: CustomerComponent },
    { path: 'confirmar-conta', component: VerifyCodeComponent },
    { path: 'reset-senha', component: ForgotPasswordComponent },
    { path: 'nova-senha', component: NewPasswordComponent, canLoad: [NewPasswordLoad] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [NewPasswordLoad]
})
export class AppRoutingModule {}
