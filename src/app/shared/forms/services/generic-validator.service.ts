import { FormGroup } from '@angular/forms';

import { ValidationMessage } from '../validation/validation-message';

export class GenericValidator{

    constructor(private validationMessage: ValidationMessage){}

    processMessage(container: FormGroup) : { [key:string] : string }{
        let messages = {};

        for(let controlKey in container.controls){
            if(container.controls.hasOwnProperty(controlKey)){
                let controle = container.controls[controlKey];
                if(controle instanceof FormGroup){
                    let childMessages = this.processMessage(controle);
                    Object.assign(messages, childMessages);
                }else{
                    if(this.validationMessage[controlKey]){
                        messages[controlKey] = '';
                        if((controle.dirty || controle.touched) && controle.errors){
                            Object.keys(controle.errors).map(messageKey => {
                                if(this.validationMessage[controlKey][messageKey]){
                                    messages[controlKey] += this.validationMessage[controlKey][messageKey];
                                }
                            })
                        }
                    }
                }
            }
        }

        return messages;
    }
}