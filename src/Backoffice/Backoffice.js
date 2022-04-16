import React, {useState} from 'react';
import {Card, CardContent, Grid, Typography, Button, Box, Modal, Fade} from '@mui/material/';
import './Backoffice.css';
import PersistentSideBar from '../features/backoffice/sideBar';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid black',
    boxShadow: 24,
    p: 4,
};

const Backoffice = () => {
    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false);

    return (
        <>
        <div>
            <PersistentSideBar/>
        </div>
            <div>
                <Modal open={open} onClose={handleClose}>
                    <Fade in={open}>
                        <Box sx={style}>
                            <Typography variant="h6" component="h2">
                                Bienvenido al backoffice
                            </Typography>
                            <Typography sx={{ mt: 2 }}>
                                Desde aquí podrás administrar el sitio.
                            </Typography>
                            <Button 
                            onClick={handleClose} 
                            variant='contained' 
                            sx={{ mt: 2 }} 
                            style={{borderRadius: "15px", backgroundColor: "#1b72b5"}}>¡Entendido!</Button>
                        </Box>
                    </Fade>
                </Modal>
            </div>
            <Box mt={6}>
                <Grid 
                container 
                rowSpacing={2} 
                columnSpacing={{ xs: 12, sm: 12, md: 12 }} 
                sx={{justifyContent: "center"}}>
                    <Grid item sx={{ minWidth: 250 }}>
                        <Card sx={{ minWidth: 250, boxShadow: 3, borderRadius: '6px' }} variant="outlined">
                            <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
                                <Typography 
                                align="center" 
                                variation="primary" 
                                sx={{color: '#76b5fa', fontWeight: 'bold'}}>
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
                                <Typography 
                                align="center" 
                                variation="primary" 
                                sx={{color: '#76b5fa', fontWeight: 'bold'}}>
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
                                <Typography 
                                align="center" 
                                variation="primary" 
                                sx={{color: '#76b5fa', fontWeight: 'bold'}}>
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
                                <Typography 
                                align="center" 
                                variation="primary" 
                                sx={{color: '#76b5fa', fontWeight: 'bold'}}>
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
                                <Typography 
                                align="center" 
                                variation="primary" 
                                sx={{color: '#76b5fa', fontWeight: 'bold'}}>
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
                                <Typography 
                                align="center" 
                                variation="primary" 
                                sx={{color: '#76b5fa', fontWeight: 'bold'}}>
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
                                <Typography 
                                align="center" 
                                variation="primary" 
                                sx={{color: '#76b5fa', fontWeight: 'bold'}}>
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
                                <Typography 
                                align="center" 
                                variation="primary" 
                                sx={{color: '#76b5fa', fontWeight: 'bold'}}>
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
        </>
    )
}

export default Backoffice;