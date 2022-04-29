import { Button, Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { redirectMP } from '../Services/mercadoPagoApiService';

const Donation = ({text}) => {
  return (
    <Container maxWidth="sm" style={{display: 'flex', justifyContent: 'space-around',
    alignItems: 'center', height: '600px'}}>
        <h2 style={{fontFamily: 'Montserrat',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '36px',
          lineHeight: '50px',
          letterSpacing: '-0.015em'
        }}>{text}</h2>
        <Link to="/gracias">
          <Button variant="contained" onClick={() => redirectMP()}>Mercado pago</Button>
        </Link>
    </Container>
  )
}

export default Donation