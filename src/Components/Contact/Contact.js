import React from 'react';
import Title from '../Title/Title';
import {Grid, Box, Typography, Button} from '@mui/material';
import {Facebook, Instagram, Twitter, LinkedIn, PhoneAndroid, LocationOn, LocalPhone} from '@mui/icons-material';
import './Contact.css';

const Contact = ({data}) => {
    return (
        <div>
            <Title title="Contacto" text="" img="images/contacto-title-alkemy.png"/>
            <Box mt={2}>
                {data ?
                <Grid container rowSpacing={2} sx={{justifyContent: "center"}}>
                    <Grid item xs={12} sm={6}>
                        <img src={data.logo} alt="logo" className="rounded-img center"/>
                    </Grid>
                    <Grid item xs={12} sm={6} p={2}>
                        <Grid>
                            <Typography sx={{fontWeight: 'bold', fontSize: '30px'}}>
                                {data.name}
                            </Typography>
                            <Typography>
                                <PhoneAndroid/>{data.cellphone}
                            </Typography>
                            <Typography>
                                <LocalPhone/>{data.phone}
                            </Typography>
                            <Typography>
                                <LocationOn/>{data.address}
                            </Typography>
                        </Grid>
                        <Grid container spacing={1} mt={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <Button startIcon={<Facebook sx={{fontSize: '60px'}}/>} variant='contained' style={{backgroundColor: "#3b5998"}}>
                                    Facebook
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button startIcon={<Instagram sx={{fontSize: '60px'}}/>} variant='contained' style={{background: "linear-gradient(to right bottom, #C13584, #405DE6)"}}>
                                    Instagram
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button startIcon={<Twitter sx={{fontSize: '60px'}}/>} variant='contained' style={{backgroundColor: "#1DA1F2"}}>
                                    Twitter
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button startIcon={<LinkedIn sx={{fontSize: '60px'}}/>} variant='contained' style={{backgroundColor: "#2867B2"}}>
                                    LinkedIn
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                : <Box sx={{justifyContent: 'center'}}>
                    <Typography sx={{fontSize: '2rem', textAlign: 'center'}}>Todavía no hay datos de contacto disponibles.</Typography>
                </Box>}
            </Box>
        </div>
    )
}

export default Contact;