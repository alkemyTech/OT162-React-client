import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './Backoffice.css';

const Backoffice = () => {
    return (
        <Box mt={6}>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 12, sm: 12, md: 12 }} sx={{justifyContent: "center"}}>
                <Grid item sx={{ minWidth: 250 }}>
                    <Card sx={{ minWidth: 250, boxShadow: 3, borderRadius: '6px' }} variant="outlined">
                        <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography align="center" variation="primary" sx={{color: '#76b5fa', fontWeight: 'bold'}}>
                                <span>Novedades</span>
                            </Typography>
                            <img src='images/novedades-icon.png' alt='logo' className='round-image center mt mb'/>
                            <Box textAlign='center'>
                                <Button variant="contained" sx={{backgroundColor: '#319795'}}>
                                    Ir
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sx={{ minWidth: 250 }}>
                    <Card sx={{ minWidth: 250, boxShadow: 3, borderRadius: '6px' }} variant="outlined">
                        <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography align="center" variation="primary" sx={{color: '#76b5fa', fontWeight: 'bold'}}>
                                <span>Actividades</span>
                            </Typography>
                            <img src='images/actividades-icon.png' alt='logo' className='round-image center mt mb'/>
                            <Box textAlign='center'>
                                <Button variant="contained" sx={{backgroundColor: '#319795'}}>
                                    Ir
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sx={{ minWidth: 250 }}>
                    <Card sx={{ minWidth: 250, boxShadow: 3, borderRadius: '6px' }} variant="outlined">
                        <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography align="center" variation="primary" sx={{color: '#76b5fa', fontWeight: 'bold'}}>
                                <span>Categorias</span>
                            </Typography>
                            <img src='images/categorias-icon.png' alt="logo" className='round-image center mt mb'/>
                            <Box textAlign='center'>
                                <Button variant="contained" sx={{backgroundColor: '#319795'}}>
                                    Ir
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sx={{ minWidth: 250 }}>
                    <Card sx={{ minWidth: 250, boxShadow: 3, borderRadius: '6px' }} variant="outlined">
                        <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography align="center" variation="primary" sx={{color: '#76b5fa', fontWeight: 'bold'}}>
                                <span>Testimonios</span>
                            </Typography>
                            <img src='images/testimonios-icon.png' alt="logo" className='round-image center mt mb'/>
                            <Box textAlign='center'>
                                <Button variant="contained" sx={{backgroundColor: '#319795'}}>
                                    Ir
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sx={{ minWidth: 250 }}>
                    <Card sx={{ minWidth: 250, boxShadow: 3, borderRadius: '6px' }} variant="outlined">
                        <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography align="center" variation="primary" sx={{color: '#76b5fa', fontWeight: 'bold'}}>
                                <span>Organización</span>
                            </Typography>
                            <img src='images/organizacion-icon.jpg' alt="logo" className='round-image center mt mb'/>
                            <Box textAlign='center'>
                                <Button variant="contained" sx={{backgroundColor: '#319795'}}>
                                    Ir
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sx={{ minWidth: 250 }}>
                    <Card sx={{ minWidth: 250, boxShadow: 3, borderRadius: '6px' }} variant="outlined">
                        <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography align="center" variation="primary" sx={{color: '#76b5fa', fontWeight: 'bold'}}>
                                <span>Slides</span>
                            </Typography>
                            <img src='images/slides-icon.png' alt="logo" className='round-image center mt mb'/>
                            <Box textAlign='center'>
                                <Button variant="contained" sx={{backgroundColor: '#319795'}}>
                                    Ir
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sx={{ minWidth: 250 }}>
                    <Card sx={{ minWidth: 250, boxShadow: 3, borderRadius: '6px' }} variant="outlined">
                        <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography align="center" variation="primary" sx={{color: '#76b5fa', fontWeight: 'bold'}}>
                                <span>Usuarios</span>
                            </Typography>
                            <img src='images/usuarios-icon.jpg' alt="logo" className='round-image center mt mb'/>
                            <Box textAlign='center'>
                                <Button variant="contained" sx={{backgroundColor: '#319795'}}>
                                    Ir
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sx={{ minWidth: 250 }}>
                    <Card sx={{ minWidth: 250, boxShadow: 3, borderRadius: '6px' }} variant="outlined">
                        <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
                            <Typography align="center" variation="primary" sx={{color: '#76b5fa', fontWeight: 'bold'}}>
                                <span>Miembros</span>
                            </Typography>
                            <img src='images/miembros-icon.png' alt="logo" className='round-image center mt mb'/>
                            <Box textAlign='center'>
                                <Button variant="contained" sx={{backgroundColor: '#319795'}}>
                                    Ir
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Backoffice;