import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {ErrorComponent } from './error.component';
@NgModule({
    declarations: [ ErrorComponent],
    imports: [ CommonModule, NgbModule ],
    exports: [ ErrorComponent ],
    providers: [],
})
export class ErrorModule {}