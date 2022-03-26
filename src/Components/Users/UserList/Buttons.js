import Button from '@mui/material/Button';

export const EditButton = (props) => {
    function EditUser(){
        console.log('Edit button press')
    }

    return(
        <Button variant="contained" onClick={() => EditUser()}>Edit</Button>
    )
}

export const DeleteButton = (props) => {
    function DeleteUser(){
        console.log('Delete button press')
    }

    return(
        <Button variant="contained" onClick={() => DeleteUser()}>Delete</Button>
    )
}