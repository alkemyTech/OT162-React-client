import React from "react";

import { useCountdown } from "../../hooks/useCountdown";

import background from "../../assets/img/toys1.jpg";
import background2 from "../../assets/img/toys2.png";

import styles from "./ToysCampaign.module.css";

const Content = ({ description, date, time, location, deadline }) => {
  const [days, hours, minutes, seconds] = useCountdown(
    "Mon Apr 18 2022 12:01:43"
  );

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.text}>
          Esta campaña viene siendo muy exitosa, estamos orgullosos de haber
          recolectado ya mas de 4700 juguetes
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
};

export default Content;
