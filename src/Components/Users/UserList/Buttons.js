import Button from '@mui/material/Button';

export const EditButton = (props) => {
    function EditUser(){
        console.log('Edit button press')
    }

    return(
        <Button variant="contained" onClick={() => EditUser(props)}>Edit</Button>
    )
}

export const DeleteButton = (props) => {
    function DeleteUser(){
        console.log('Delete button press')
    }

    return(
        <Button variant="contained" onClick={() => DeleteUser(props)}>Delete</Button>
    )
}

export const CreateButton = () => {
    return(
        <Button variant="contained" onClick={() => console.log('Crete Button press')}>Create new User</Button>
    )
}