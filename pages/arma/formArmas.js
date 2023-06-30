import Pagina from '@/Components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FiSave } from 'react-icons/fi'
import { BsArrowBarLeft } from 'react-icons/bs'
import Global from '@/styles/global'
import styles from '@/styles/form.module.css'
import Titulo from '@/Components/Titulo'
import armasValidator from '@/validators/armasValidator'

const formArmas = () => {

  const { push } = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm();

  function salvar(dados) {
    const armas = JSON.parse(window.localStorage.getItem('armas')) || []
    armas.unshift(dados)
    window.localStorage.setItem('armas', JSON.stringify(armas))
    push("/arma")
  }

  return (
    <>
    <Pagina/>
    <Global/>
    <Titulo titulo='Crie suas armas'>
      <Form className={styles.formArmas}>
        <Form.Group className="mb-3" controlId="item">
          <Form.Label>Item</Form.Label>
          <Form.Control className={styles.controll} type="text" placeholder="Digite o nome do Item" {...register('item', armasValidator.item) } />
          {
            errors.item &&
            <p className='text-warning mt-1'>{errors.item.message}</p>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="descricao">
          <Form.Label>Descrição</Form.Label>
          <Form.Control className={styles.controll} type="text" placeholder="Digite uma descrição" {...register('descricao', armasValidator.descricao)} />
          {
            errors.descricao &&
            <p className='text-warning mt-1'>{errors.descricao.message}</p>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="quantidade">
          <Form.Label>Quantidade</Form.Label>
          <Form.Control className={styles.controll} type="text" placeholder="quantidade" {...register('quantidade', armasValidator.quantidade)} />
          {
            errors.quantidade &&
            <p className='text-warning mt-1'>{errors.quantidade.message}</p>
          }
        </Form.Group>

        <div className='text-center'>
          <Button className={styles.btnSave}  variant='primary' onClick={handleSubmit(salvar)}>
            <FiSave/>
            Salvar
          </Button>
          <Link className='ms-2' href={'/arma'}>
            <Button className={styles.btnBack}  variant="danger">
              <BsArrowBarLeft/>
              Voltar
            </Button>
          </Link>
        </div>
      </Form>
      </Titulo>
      </>
  )
}

export default formArmas