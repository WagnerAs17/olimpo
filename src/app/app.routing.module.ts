import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './Account/customer/customer.component';

import { LoginComponent } from './Account/login/login.component';
import { HomeComponent } from './navigation/home/home.component';
import { VerifyCodeComponent } from './Account/security/verify-code/verify-code.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'login', component : LoginComponent },
    { path: 'matricular', component: CustomerComponent },
    { path: 'confirmar-conta', component: VerifyCodeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
