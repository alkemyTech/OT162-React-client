import { Button, Container } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Thanks = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/')
    }
    return (
        <Container maxWidth="sm" style={{display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',height: '600px'}}>
    
            <h2 style={{fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '36px',
    lineHeight: '50px',
    letterSpacing: '-0.015em'
    }}>Muchas gracias por la donación</h2>
            <Button onClick={handleClick} variant="contained">Volver</Button>
        </Container>
    
       
    
      )
}

export default Thanks