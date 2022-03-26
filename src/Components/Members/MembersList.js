import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Grid, Card, CardContent, Typography} from '@mui/material';
import './MembersList.css';

const MembersList = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        axios.get('https://ongapi.alkemy.org/api/members')
        .then((res) => {
            console.log(res.data.data);
            setMembers(res.data.data);
        })
    }, [])
    return (
        <div>
            {members && console.log("members:",members)}
        </div>
    )
}

export default MembersList;