import React from 'react'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


const Pagina = (props) => {
    return (
        <>
            <Cabecalho />
            <Container>
                  {props.children}
            </Container>
          

            
            <Rodape />
        </>
    )
}

export default Pagina