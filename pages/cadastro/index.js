import Pagina from '@/Components/Pagina'
import Global from '@/styles/global'
import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import styles from '@/styles/cadastro.module.css'
import Link from 'next/link'
import { AiOutlineStepBackward } from 'react-icons/ai'
import { BsSendCheck } from 'react-icons/bs'
import { useForm } from 'react-hook-form'
import cadValidator from '@/validators/cadValidator'
import { mask } from 'remask'

const cadastro = () => {

  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  function salvar() {
  }

    function handleChange(event){

      setValue(event.target.name, (mask(event.target.value, event.target.getAttribute("mask"))))
  
    }



  return (
    <>
      <div className={styles.bg}>
        <Global />
        <Pagina />
        <Container>
          <Row>
            <Col md={9}>
              <Card border='black' className={styles.card}>
                <Card.Img src='https://wallpapers.com/images/featured/305kescxw5dpup7y.jpg' className={styles.img} />
                <Form className={styles.nome}>
                  <Form.Group controlId="nome">
                    <Link href={'/'}> <Button className={styles.btnBack}>Voltar <AiOutlineStepBackward className='me-1' /> </Button></Link>
                    <h2>Cadastre-se</h2>
                    <Form.Label>Nome completo:</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu nome" {...register('nome', cadValidator.nome)} />
                    {
                      errors.nome &&
                      <p className='text-warning'>{errors.nome.message}</p>
                    }
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Digite seu email" {...register('email', cadValidator.email)} />
                    {
                      errors.email &&
                      <p className='text-warning'>{errors.email.message}</p>
                    }
                  </Form.Group>

                  <Form.Group controlId="nick">
                    <Form.Label>Nick:</Form.Label>
                    <Form.Control type="text" placeholder="Digite o seu nick" {...register('nick', cadValidator.nick)} />
                    {
                      errors.nick &&
                      <p className='text-warning'>{errors.nick.message}</p>
                    }
                  </Form.Group>

                  <Form.Group controlId="cpf">
                    <Form.Label>CPF:</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu cpf" {...register('cpf', cadValidator.cpf)} mask="999.999.999-99"
          onChange={handleChange} />
                    {
                      errors.cpf &&
                      <p className='text-warning'>{errors.cpf.message}</p>
                    }
                  </Form.Group>

                  <Form.Group controlId="telefone">
                    <Form.Label>Telefone:</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu telefone" {...register('telefone', cadValidator.telefone)}  mask="(99)99999-9999"
          onChange={handleChange} />
                    {
                      errors.telefone &&
                      <p className='text-warning'>{errors.telefone.message}</p>
                    }
                  </Form.Group>
                </Form>
            <Button type='submit' className={styles.btnSub} onClick={handleSubmit(salvar)} >ENVIAR <BsSendCheck /> </Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default cadastro