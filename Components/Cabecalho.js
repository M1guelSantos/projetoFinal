import { Button, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { GiPistolGun, GiCurvyKnife, GiFireRay } from 'react-icons/gi'
import styles from '@/styles/cabecalho.module.css'
import Link from 'next/link'
import {AiOutlineAppstore} from 'react-icons/ai'
import { BiLogIn } from 'react-icons/bi'


const Cabecalho = () => {

  return (

    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="/" className='text-danger'><p className='m-1'>MERCADO NOTURNO</p></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/arma" className='text-white'> <GiPistolGun/> Armas</Nav.Link>
            <Nav.Link href="/faca" className='text-white'> <GiCurvyKnife/> Facas</Nav.Link>
            <Nav.Link href="/habilidade" className='text-white'> <GiFireRay/> Habilidades</Nav.Link>
           <Link href='/loja' className={styles.btnHeader}><Button variant="danger"> <AiOutlineAppstore className='m-1'/>Loja </Button></Link>

           <Link href='/cadastro' className={styles.btnHeaderLog}><Button variant="danger"> <BiLogIn className='m-1'/> Register</Button></Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho