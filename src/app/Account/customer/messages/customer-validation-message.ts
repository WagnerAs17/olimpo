import { ValidationMessage } from '../../../shared/forms/validation/validation-message';

export const validationMessage: ValidationMessage = {
    email: {
        required: '* O e-mail é obrigatório',
        email: '* E-mail em formato inválido'
      },
      nome: {
        required: '* O nome é obrigatório',
      },
      cpf: {
        required: 'Informe um CPF',
        cpf: 'CPF em formato inválido'
      },
      senha: {
        required: '* A senha é obrigatória <br>',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      },
      senhaConfirmarcao: {
        required: '* Informe a confirmação de senha <br>',
        rangeLength: '* A senha deve possuir entre 6 e 15 caracteres <br>',
        equalTo: '* As senhas não conferem'
      },
      planoId: {
        required: 'Selecione um plano',
      }
}