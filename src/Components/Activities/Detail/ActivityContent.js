import { errorAlert } from '../../../features/alerts/alerts';

const ActivityContent = (description) => {
    let HTMLString = description

    if(HTMLString.value !== undefined){
        function createMarkup(){
            return{__html: (HTMLString)}
        }
        return(
            <div dangerouslySetInnerHTML={createMarkup()}/>
        )
    }else{
        errorAlert('Ha ocurrido un error', 'No hay actividades que mostrar', 'Continuar...')
        return(
            <h3>Here well be display a selected activity</h3>
        )
    }
}

export default ActivityContent