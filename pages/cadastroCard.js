import Pagina from '@/Components/Pagina'
import Global from '@/styles/global'
import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import styles from '@/styles/cartao.module.css'
import Link from 'next/link'
import { AiOutlineStepBackward } from 'react-icons/ai'
import { BsSendCheck } from 'react-icons/bs'
import { mask } from 'remask'
import { useForm } from 'react-hook-form'
import cartaoValidator from '@/validators/cartaoValidator'

const index = () => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    function salvar() {
    }

    function handleChange(event) {

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
                                <Card.Img src='https://bestpoints.com/storage/2021/10/ikonki__Valorant.jpg' className={styles.img} />
                                <Form className={styles.nome} >
                                    <Form.Group controlId="nome">
                                        <Link href={'/loja'}> <Button className={styles.btnBack}>Voltar <AiOutlineStepBackward className='me-1' /> </Button></Link>
                                        <h2>Compre</h2>
                                        <Form.Label>Nome completo:</Form.Label>
                                        <Form.Control type="text" placeholder="Digite seu nome"  {...register('nome', cartaoValidator.nome)} />
                                        {
                                            errors.nome &&
                                            <p className='text-warning'>{errors.nome.message}</p>
                                        }
                                    </Form.Group>

                                    <Form.Group controlId="email">
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control type="email" placeholder="Digite seu email"  {...register('email', cartaoValidator.email)} />
                                        {
                                            errors.email &&
                                            <p className='text-warning'>{errors.email.message}</p>
                                        }
                                    </Form.Group>

                                    <Form.Group controlId="cartao">
                                        <Form.Label>Número Cartão</Form.Label>
                                        <Form.Control type="text" placeholder="Digite o número do seu cartão"  {...register('cartao', cartaoValidator.cartao)} mask="9999 9999 9999 9999"
                                            onChange={handleChange} />
                                        {
                                            errors.cartao &&
                                            <p className='text-warning'>{errors.cartao.message}</p>
                                        }
                                    </Form.Group>

                                    <Form.Group controlId="cpf">
                                        <Form.Label>CPF:</Form.Label>
                                        <Form.Control type="text" placeholder="Digite seu cpf" {...register('cpf', cartaoValidator.cpf)} mask="999.999.999-99"
                                            onChange={handleChange} />
                                        {
                                            errors.cpf &&
                                            <p className='text-warning'>{errors.cpf.message}</p>
                                        }
                                    </Form.Group>

                                    <Form.Group controlId="endereco">
                                        <Form.Label>Endereço:</Form.Label>
                                        <Form.Control type="text" placeholder="Digite seu endereço"  {...register('endereco', cartaoValidator.endereco)} />
                                        {
                                            errors.endereco &&
                                            <p className='text-warning'>{errors.endereco.message}</p>
                                        }
                                    </Form.Group>

                                    <Form.Group controlId="cep">
                                        <Form.Label>CEP:</Form.Label>
                                        <Form.Control type="text" placeholder="Digite seu cep"  {...register('cep', cartaoValidator.cep)} mask="99.999-999"
                                            onChange={handleChange} />
                                        {
                                            errors.cep &&
                                            <p className='text-warning'>{errors.cep.message}</p>
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

export default index