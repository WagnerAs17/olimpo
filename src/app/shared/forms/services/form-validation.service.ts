import { ElementRef } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { fromEvent, merge, Observable } from "rxjs";
import { FormValidation } from "../validation/form-validation";
import { GenericValidator} from "./generic-validator.service";
import { ValidationMessage } from '../validation/validation-message';

export class FormValidationService{
    private controlBlurs: Observable<any>[];
    private genericValidator: GenericValidator;

    constructor(private validationMessage: ValidationMessage){
        this.genericValidator = new GenericValidator(this.validationMessage);
    }

    validationForm(
        formInputElements: ElementRef[],
        formGroup: FormGroup,
        formValidation: FormValidation
    )
    {
        this.controlBlurs = formInputElements
            .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
        
        merge(...this.controlBlurs).subscribe(() => {
            formValidation.setMessages(this.genericValidator.processMessage(formGroup));
        })
    }
}
