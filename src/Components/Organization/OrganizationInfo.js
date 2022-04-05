import React from "react";
import { Link } from "react-router-dom";

const OrganizationInfo = () => {
  return (
    <div>
      <h1>Somos Más</h1>
      <image />
      <p>
        Somos una asociación civil sin fines de lucro que se creó en 1997 con la
        intención de dar alimento a las familias del barrio. Con el tiempo
        fuimos involucrándonos con la comunidad y agrandando y mejorando nuestra
        capacidad de trabajo. Hoy somos un centro comunitario que acompaña a más
        de 700 personas a través de las áreas de: Educación, deportes, primera
        infancia, salud, alimentación y trabajo social.
      </p>
      <Link to="/backoffice/organization/edit" />
    </div>
  );
};

export default OrganizationInfo;
