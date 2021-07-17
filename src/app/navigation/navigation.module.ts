import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { GymPlanComponent } from './gymplan/gymplan.component';
import { GymPlanDetailsComponent } from './gymplan/gymplan-details/gymplan-details.component';
import { HomeComponent } from './home/home.component';

registerLocaleData(ptBr);
@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        NavbarComponent,
        GymPlanComponent,
        GymPlanDetailsComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        NgxSpinnerModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'pt' },
        { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' 
    },
    ]
})
export class NavigationModule { }