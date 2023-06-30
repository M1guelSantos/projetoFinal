import Pagina from '@/Components/Pagina'
import Global from '@/styles/global'
import { Table } from 'react-bootstrap'
import styles from '@/styles/table.module.css'
import { BsTrash } from 'react-icons/bs'
import { BiEditAlt } from 'react-icons/bi'
import Titulo from '@/Components/Titulo'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {AiFillPlusSquare} from 'react-icons/ai'

const armas = () => {

  const [facas, setFacas] = useState([])

  useEffect(() => {
    setFacas(getAll())
  }, [])

  function getAll() {
    return JSON.parse(window.localStorage.getItem('facas')) || []
  }
  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro?')) {
      const itens = getAll()
      itens.splice(id, 1)
      window.localStorage.setItem('facas', JSON.stringify(itens))
      setFacas(itens)
    }
  }

  return (
    <>
      <Global />
      <Pagina />
      <Titulo titulo='Facas'>
      <Link href="/faca/formFacas" className='mb-2 btn btn-danger'>
      <AiFillPlusSquare className='m-1'/>
                Novo
            </Link>
        <Table className={styles.table} striped bordered hover variant="danger">
          <thead>
            <tr>
              <th className='text-center'>Item</th>
              <th className='text-center'>Descrição</th>
              <th className='text-center'>Quantidade</th>
              <th className='text-center'>Alterações</th>
            </tr>
          </thead>
          <tbody>
            {facas.map((item, indice) => (
              <tr key={indice}>
                <td className='text-center'>{item.item}</td>
                <td className='text-center'>{item.descricao}</td>
                <td className='text-center'>{item.quantidade}</td>
                <td className='text-center'><BsTrash onClick={() => excluir(indice)} className='text-danger'/>
                <Link href={'/faca/' + indice}>
                <BiEditAlt className='text-primary'/>
                </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Titulo>
    </>
  )
}

export default armas