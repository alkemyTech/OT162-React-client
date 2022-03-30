import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Grid, Card, CardContent, Typography, Button, Box} from '@mui/material';
import {Facebook, LinkedIn} from '@mui/icons-material';
import './MembersList.css';

const InnerHTML = ({html}) => {
    function createMarkup(){
        return{__html: (html)}
    }
    return (
        <div dangerouslySetInnerHTML={createMarkup()}/>
    )
}

const MembersList = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        axios.get('https://ongapi.alkemy.org/api/members')
        .then((res) => {
            setMembers(res.data.data);
        })
    }, [])
    return (
        <div>
            <Grid container spacing={2} xs={12} sm={12} sx={{justifyContent: 'center'}} mt={2}>
                {members.map((item, index) => (
                    <Grid item key={index} sx={{ minWidth: 250 }}>
                        <Card sx={{ minWidth: 250, boxShadow: 3, borderRadius: '6px' }} variant="outlined">
                            <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
                                <div className='rounded-image-container'>
                                    <img src={item.image} alt='logo' className='rounded-image'/>
                                </div>
                                <Typography 
                                align="center" 
                                variation="primary" 
                                variant="h4"
                                sx={{fontWeight: 'bold'}} 
                                mt={2}>
                                    {item.name}
                                </Typography>
                                <Typography 
                                align="center" 
                                variation="primary" 
                                variant="subtitle1"
                                sx={{fontWeight: 'bold'}}>
                                    <InnerHTML html={item.description}></InnerHTML>
                                </Typography>
                                <Grid container xs={12}>
                                    <Grid item xs={6}>
                                        <Box textAlign='center'>
                                            <Button 
                                            startIcon={<Facebook sx={{fontSize: '60px'}}/>} 
                                            variant='contained' 
                                            style={{backgroundColor: "#3b5998"}}
                                            target="_blank"
                                            href={item.facebookUrl}>
                                                Facebook
                                            </Button>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box textAlign='center'>
                                            <Button 
                                            startIcon={<LinkedIn sx={{fontSize: '60px'}}/>} 
                                            variant='contained' 
                                            style={{backgroundColor: "#2867B2"}} 
                                            target="_blank" 
                                            href={item.linkedinUrl}>
                                                LinkedIn
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default MembersList;