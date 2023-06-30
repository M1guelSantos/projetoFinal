import Pagina from '@/Components/Pagina'
import Global from '@/styles/global'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { AiOutlineRollback } from 'react-icons/ai'
import { FiSave} from 'react-icons/fi'

const id = () => {
    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        if (query.id) {
            const facas = JSON.parse(window.localStorage.getItem('facas'))
            const faca = facas[query.id]
            for (let campo in faca) {
                setValue(campo, faca[campo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const facas = JSON.parse(window.localStorage.getItem('facas')) || []
        facas.splice(query.id, 1, dados)
        window.localStorage.setItem('facas', JSON.stringify(facas))
        push('/faca')
    }

    return (
        <>
        <Pagina/>
        <Global/>
            <Form>
                <Form.Group className="mb-3" controlId="item">
                    <Form.Label>Item</Form.Label>
                    <Form.Control type="text" placeholder="Digite o nome do item" {...register('item')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="descricao">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control type="text" placeholder="Digite a descrição" {...register('descricao')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="quantidade">
                    <Form.Label>Quantidade</Form.Label>
                    <Form.Control type="text" placeholder="Digite a quantidade" {...register('quantidade')} />
                </Form.Group>

                <div className='text-center'>
                    <Button variant='success' onClick={handleSubmit(salvar)}>
                        <FiSave className='me-2' />
                        Salvar
                    </Button>
                    <Link className='ms-2 btn btn-danger' href="/facas">
                        <AiOutlineRollback className='me-2' />
                        Voltar
                    </Link>
                </div>
            </Form>
        </>
    )
}

export default id