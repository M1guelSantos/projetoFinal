import React from 'react'
import { Container } from 'react-bootstrap'

const Titulo = (props) => {
    return (
        <>

            <div className='bg-danger text-align py-2 mb-3 text-center text-white'>
                <h1> {props.titulo} </h1>
            </div>

            <Container>
                {props.children}
            </Container>
        </>

    )
}

export default Titulo