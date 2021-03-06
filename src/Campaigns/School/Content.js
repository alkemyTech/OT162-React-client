import React from 'react';
import { useCountdown } from "../../hooks/useCountdown";
import './Content.css';

const Content = () => {
  const [days, hours, minutes, seconds] = useCountdown(
    "Thu Jun 30 2022 15:00:00"
  );


  return (
    <>
    <div className='sc_container'>
      <div>
      <p style={{fontSize: "1.5rem"}}>
        Campaña escolar <b>"Juntos por la educación"</b>: Recolectamos donaciones para los chicos que más necesitan materiales para poder seguir estudiando. ¡Te esperamos!
      </p>
      <div className='sc_container__middle'>
        <div>
          <img src='images/school-campaign/blog-img-01.jpg' alt='parque centenario'></img>
        </div>
        <div className='sc_container__middle--data'>
          <span><b>Fecha</b>: 30/6/2022</span><br></br>
          <span><b>Hora</b>: 15hs</span><br></br>
          <span><b>Sitio</b>: Parque centenario</span>
        </div>
        <div>
          <img src='images/school-campaign/school-campaign-logo.png' alt='parque centenario'></img>
        </div>
      </div>
      </div>
      <div className='counter'>
        <span><b>Faltan</b>: {days} días, {hours} hrs {minutes} min {seconds} seg</span>
      </div>
    </div>
    </>
  );
}
 
export default Content;