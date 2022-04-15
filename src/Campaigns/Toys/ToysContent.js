import React from 'react';

import { useCountdown } from '../../hooks/useCountdown';

import background from '../../assets/img/toys1.jpg' ;
import background2 from '../../assets/img/toys2.png' ;




import styles from './ToysCampaign.module.css'


const Content = ({description, date, time, location, deadline}) => {

  const [days, hours, minutes, seconds] = useCountdown('Mon Apr 18 2022 12:01:43');

 
  return (

    <div className={styles.container}  >


      <div className={styles.info}>

        <h1>  01-01-1900 13:15 hs <br />
      
      Calle 123, Localidad, Provincia <br/></h1>
     
      
       <div className={styles.countdown}>
     <span> Te quedan <b>{days}d {hours}h {minutes}m {seconds}s </b> para participar</span>

          </div>
      
      <p className={styles.text}>
        Descripcion de la campaña lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p> 
</div>
<div className={styles.images}>
            <figure>
                <img src={background} alt="toy1" />
            </figure>
            <figure>
                <img src={background2} alt="toy2" />
            </figure>

          </div>
    </div>
  );
}
 
export default Content;
