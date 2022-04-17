import react, {useEffect, useState} from 'react';
import {Get} from '../../Services/publicApiService';
import {Card, Box, Grid, CardContent, Typography} from '@mui/material';
import Loader from '../Loader/Loader';
import './Comments.css';

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        Get('comments').then((response) => {
            setComments(response);
        })
    },[]);

    return (
        <Box m={4}>
            {comments.length > 0 ?
            <Grid 
            container 
            rowSpacing={1} 
            columnSpacing={{ xs: 12, sm: 12, md: 12 }} 
            sx={{justifyContent: "center"}}>
            {comments.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card sx={{ boxShadow: 3, borderRadius: '6px' }}>
                        <CardContent sx={{display: 'flex', flexDirection: 'column'}}>
                            <div className='rounded-container center-image'>
                                <img src={item.image}/>
                                <img src="../images/blank-profile-picture-640.png"/>
                            </div>
                            <Typography 
                            align="center" 
                            variation="primary" 
                            mt={2}>
                                "{item.text}"
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
            </Grid>
            : <Loader texto="texto" rectangular="rectangular"/>}
        </Box>
    )
}

export default Comments;