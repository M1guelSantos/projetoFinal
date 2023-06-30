const armasValidator = {
    item:  {
        required: 'Campo Obrigatório',
        minLength: {
          value: 3,
          message: 'O mínimo é 3',
        },
        maxLength: {
          value: 10,
          message: 'O máximo é 10'
        },
      },

      descricao: {
        required: 'Campo Obrigatório',
        minLength: {
          value: 5,
          message: 'O mínimo é 5',
        },
        maxLength: {
          value: 20,
          message: 'O máximo é 20'
        },
      },

        quantidade: {
        required: 'Campo Obrigatório',
      }
    
}

export default armasValidator