import { errorAlert } from '../../../features/alerts/alerts';
import { useEffect, useState } from 'react';
import Loading from '../../Utilities/Loading';

const ActivityContent = (description) => {

    const [loading, setLoading] = useState(true);

    let HTMLString = description

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    if(HTMLString.value !== undefined){
        function createMarkup(){
            return{__html: (HTMLString)}
        }
        return(
            <div>
                { loading ? Loading() : <div dangerouslySetInnerHTML={createMarkup()}/>}
            </div>
        )
    }else{
        errorAlert('Ha ocurrido un error', 'No hay actividades que mostrar', 'Continuar...')
        return(
            <div>
                { loading? Loading() : <h3>Aqui veras las próximas acitivades</h3>}
            </div>            
        )
    }
}

export default ActivityContent