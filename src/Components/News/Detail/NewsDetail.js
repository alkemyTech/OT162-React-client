import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const NewsDetail = (props) => {
    let { id } = useParams();
    const [details, setDetails] = useState({message: "Cargando..."});

    useEffect(() => {
        axios.get("https://ongapi.alkemy.org/api/news/" + id)
        .then((res) => {
            setDetails(res.data);
        })
        .catch((err) => {
            setDetails({message: err.toString()});
        })
    }, [id]);

    return (
        <Card sx={{ maxWidth: 400 }}>
            {details.data ?
            <div>
                <CardMedia
                    component="img"
                    alt="image"
                    height="140"
                    image={details.data.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {details.data.content}
                    </Typography>
                </CardContent>
            </div> : 
            <div>{details.message}</div>}
        </Card>
    )
}

export default NewsDetail;