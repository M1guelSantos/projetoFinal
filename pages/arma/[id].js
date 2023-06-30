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
            const armas = JSON.parse(window.localStorage.getItem('armas'))
            const arma = armas[query.id]
            for (let campo in arma) {
                setValue(campo, arma[campo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const armas = JSON.parse(window.localStorage.getItem('armas')) || []
        armas.splice(query.id, 1, dados)
        window.localStorage.setItem('armas', JSON.stringify(armas))
        push('/arma')
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
                    <Link className='ms-2 btn btn-danger' href="/arma">
                        <AiOutlineRollback className='me-2' />
                        Voltar
                    </Link>
                </div>
            </Form>
        </>
    )
}

export default id