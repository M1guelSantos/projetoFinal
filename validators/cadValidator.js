const cadValidator = {

  nome: {
    required: 'Campo Obrigatório',
    minLength: {
      value: 3,
      message: 'O mínimo é 3',
    },
  },
     
      email: {
    required: 'Digite um email válido',
  },

  nick: {
    required: 'Digite um nick válido',
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

  telefone: {
    required: 'Campo Obrigatório',
    minLength: {
      value: 11,
      message: 'O mínimo é 11',
    },
    maxLength: {
      value: 14,
      message: 'O máximo é 14'
    },
  }
}


export default cadValidator