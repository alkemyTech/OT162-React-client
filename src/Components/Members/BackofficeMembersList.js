import { Button, CircularProgress, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';


const baseUrl ="https://ongapi.alkemy.org/api";
const mockMembers = [
  {
    "id": 519,
    "name": "Marita Gómez",
    "image": "http://ongapi.alkemy.org/storage/N6oQhXMxTO.jpeg",
    "description": "<p>Fundadora</p>",
    "facebookUrl": "https://www.facebook.com/",
    "linkedinUrl": "https://www.linkedin.com/",
    "created_at": "2022-02-28T14:22:20.000000Z",
    "updated_at": "2022-02-28T14:22:20.000000Z",
    "deleted_at": null,
    "group_id": 36
  },
  {
    "id": 520,
    "name": "Miriam Rodriguez",
    "image": "http://ongapi.alkemy.org/storage/9tJ1IBi42b.jpeg",
    "description": "<p>Terapista Ocupacional</p>",
    "facebookUrl": "https://www.facebook.com/",
    "linkedinUrl": "https://www.linkedin.com/",
    "created_at": "2022-02-28T14:23:06.000000Z",
    "updated_at": "2022-02-28T14:23:06.000000Z",
    "deleted_at": null,
    "group_id": 36
  },
  {
    "id": 521,
    "name": "Cecilia Mendez",
    "image": "http://ongapi.alkemy.org/storage/Ly1bfZhxhx.jpeg",
    "description": "<p>Psicopedagoga</p>",
    "facebookUrl": "https://www.facebook.com/",
    "linkedinUrl": "https://www.linkedin.com/",
    "created_at": "2022-02-28T14:24:13.000000Z",
    "updated_at": "2022-02-28T14:24:13.000000Z",
    "deleted_at": null,
    "group_id": 36
  },
  {
    "id": 542,
    "name": "Andrés Ibarra",
    "image": "https://socialtools.me/wp-content/uploads/2016/04/foto-de-perfil.jpg",
    "description": "Asesor Jurídico",
    "facebookUrl": "https://facebook.com",
    "linkedinUrl": "https://linkedin.com",
    "created_at": "2022-03-26T20:11:22.000000Z",
    "updated_at": "2022-03-26T20:11:22.000000Z",
    "deleted_at": null,
    "group_id": null
  }
    
]

const MembersList = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const editMember = (id) => {

    navigate(`/backoffice/members/edit/${id}`)

  }
  

  const deleteMember = (id) => {
    
    swal({
      title: "Are you sure you want to delete?",
      text: "This change cannot be reverted",
      buttons: ["No", "Yes"],
      dangerMode: "true",
    }).then((willDelete) => {
      if (willDelete) {
        setLoading(true)
        axios
          .delete(`${baseUrl}/members/${id}`)
          .then(() => {
            setLoading(false)
            swal('Success','Member deleted successfully','success')})
          .catch((err) => {
            swal(
             "Error",
              "Oops! something went wrong, please try again",
              "error",
            );
            setLoading(false)
            console.log(err);
          });
      }
    });
  };

  return (
    <Container maxWidth="lg">
      <Button
        component={Link}
        to="/backoffice/members/create"
        variant="contained"
        sx={{ margin: '20px 0' }}
      >
        Add new member
      </Button>
      { loading ? <div style={{ width: '100%', height: '200px', display: 'grid', placeItems: 'center' }}>
        <CircularProgress />
        </div> : <TableContainer component={Paper} elevation={3}>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Photo</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockMembers.map((member) => (
              <TableRow
                key={member.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
              
              <TableCell component="th" align="center" scope="row">
                {member.name}
              </TableCell>
                <TableCell align="center">
                  <img src={member.image} style={{maxWidth: '120px'}} alt={member.name} />
                </TableCell>
                <TableCell align="center">
                 
                    <Button
                      variant="outlined"
                      onClick={() => editMember(member.id)}
                      style={{marginRight: '25px'}}
                    >
                      <EditIcon/>
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => deleteMember(member.id)}
                    >
                     <DeleteIcon/>
                    </Button>
              
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>}
    </Container>
  );
};


export default MembersList