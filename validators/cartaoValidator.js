const cartaoValidator = {

    nome:  {
        required: 'Campo Obrigatório',
        minLength: {
          value: 3,
          message: 'O mínimo é 3',
        }
    },

    email: {
        required: 'Digite um email válido',
      },

    cartao:  {
        required: 'Campo Obrigatório',
        minLength: {
          value: 16,
          message: 'O mínimo é 16',
        },
        maxLength: {
          value: 19,
          message: 'O máximo é 19'
        },
      },

      cpf: {
        required: 'Campo Obrigatório',
        minLength: {
          value: 11,
          message: 'O mínimo é 11',
        },
        maxLength: {
          value: 14,
          message: 'O máximo é 14'
        },
      },
    
    endereco: {
        required: 'Campo Obrigatório',
      },
       
      cep: {
        required: 'Campo Obrigatório',
        minLength: {
          value: 8,
          message: 'O mínimo é 8',
        },
        maxLength: {
          value: 14,
          message: 'O máximo é 10'
        },
      },
      

}
  export default cartaoValidator