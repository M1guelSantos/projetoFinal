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
import habValidator from '@/validators/habValidator'

const formHab = () => {

  const { push } = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm();

  function salvar(dados) {
    const habilidades = JSON.parse(window.localStorage.getItem('habilidades')) || []
    habilidades.unshift(dados)
    window.localStorage.setItem('habilidades', JSON.stringify(habilidades))
    push("/habilidade")
  }

  return (
    <>
    <Pagina/>
    <Global/>
      <Form className={styles.hab}>
        <Form.Group className="mb-3" controlId="item">
          <Form.Label>Item</Form.Label>
          <Form.Control className={styles.controll}  type="text" placeholder="Digite o nome do Item" {...register('item', habValidator.item)} />
          {
            errors.item &&
            <p className='text-warning mt-1'>{errors.item.message}</p>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="descricao">
          <Form.Label>Descrição</Form.Label>
          <Form.Control className={styles.controll}  type="text" placeholder="Digite uma descrição" {...register('descricao', habValidator.descricao)} />
          {
            errors.descricao &&
            <p className='text-warning mt-1'>{errors.descricao.message}</p>
          }
        </Form.Group>

        <Form.Group className="mb-3" controlId="quantidade">
          <Form.Label>Quantidade</Form.Label>
          <Form.Control className={styles.controll}  type="number" placeholder="quantidade" {...register('quantidade', habValidator.quantidade)} />
          {
            errors.quantidade &&
            <p className='text-warning mt-1'>{errors.quantidade.message}</p>
          }
        </Form.Group>

        <div className='text-center'>
          <Button variant='primary' onClick={handleSubmit(salvar)}>
            <FiSave className='me-2' />
            Salvar
          </Button>
          <Link className='ms-2' href={'/habilidade'}>
            <Button className={styles.btnBack} variant="danger">
              <BsArrowBarLeft className='me-2' />
              Voltar
            </Button>
          </Link>
        </div>
      </Form>
      </>
  )
}

export default formHab