import { Button, CircularProgress, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import { errorAlert } from '../../features/alerts/alerts';
import store from '../../app/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMembers } from '../../features/reducers/membersSlice';
import PersistentSideBar from '../../features/backoffice/sideBar';


const baseUrl ="https://ongapi.alkemy.org/api";

const BackofficeMembersList = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    store.dispatch(fetchMembers())
  }, [dispatch])
  
  const currentMembers = useSelector((state) => state.members)
  const members = Array.from(currentMembers)

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const editMember = (id) => {

    navigate(`/backoffice/members/edit/${id}`)

  }
  

  const deleteMember = (id) => {
    
    swal({
      title: "¿Está seguro que desea eliminar el miembro?",
      text: "Este cambio es irreversible",
      buttons: ["No", "Si"],
      dangerMode: "true",
    }).then((willDelete) => {
      if (willDelete) {
        setLoading(true)
        axios
          .delete(`${baseUrl}/members/${id}`)
          .then(() => {
            setLoading(false)
            swal('Miembro eliminado correctamente','','success')})
          .catch((err) => {           
            errorAlert("Error","Hubo un problema al eliminar el miembro.","Continuar")
            setLoading(false)
            console.log(err);
          });
      }
    });
  };

  return (
    <div>
      <div>
            <PersistentSideBar/>
      </div>
      <Container maxWidth="lg">
        <Button
          component={Link}
          to="/backoffice/members/create"
          variant="contained"
          sx={{ margin: '20px 0' }}
        >
          Agregar un nuevo miembro
        </Button>
        { loading ? <div style={{ width: '100%', height: '200px', display: 'grid', placeItems: 'center' }}>
          <CircularProgress />
          </div> : <TableContainer component={Paper} elevation={3}>
          <Table sx={{ minWidth: 550 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="center">Imagen</TableCell>
                <TableCell align="center">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {members.map((member) => (
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
    </div>
  );
};


export default BackofficeMembersList