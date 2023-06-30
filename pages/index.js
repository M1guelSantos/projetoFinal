import Pagina from '@/Components/Pagina'
import React from 'react'
import Global from '@/styles/global'
import { Card, Col, Row } from 'react-bootstrap'
import styles from '@/styles/card.module.css'
import Link from 'next/link'

const index = () => {
  return (
    <>
      <div className={styles.fundo}>
        <Global />
        <Pagina />
        <div className='text-white text-center mt-5 '><h2>BEM VINDO AO MERCADO NOTURNO!</h2></div>
        <h3 className='text-white text-center mt-2'>Equipe-se com os melhores produtos do universo de Valorant <br />Compre e construa os itens de sua preferência</h3>

        <Row md={4}>
          <Col>
            <Card className={styles.card}>
            <a href='/https//playvalorant.com/pt-br/'></a> <Card.Img className={styles.cardImg} variant="top" src='https://wallpapers.com/images/featured/305kescxw5dpup7y.jpg' />
            <h4 className={styles.h4}>MAIS SOBRE VALORANT</h4>
          </Card>
        </Col>
      </Row>
    </div >
    </>
  )
}

export default index