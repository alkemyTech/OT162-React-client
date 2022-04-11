import "../CardListStyles.css";
import Title from "../Title/Title";
import { errorAlert } from "../../features/alerts/alerts";
import { useEffect, useState } from "react";
import Loading from "../Utilities/Loading";

import { selectActivities, getActivitiesStatus, getActivitiesError, fetchActivities } from "../../features/activities/activitiesSlice";
import { useSelector, useDispatch } from "react-redux";

const ActivitiesList = () => {
  
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const activities = useSelector(selectActivities);
  const activitiesStatus = useSelector(getActivitiesStatus);
  const activitiesError = useSelector(getActivitiesError);
  console.log(activities);

  useEffect(() => {
    setTimeout(() =>{
      setLoading(false);
    }, 2000);

    activitiesStatus === "idle" && dispatch(fetchActivities());

  }, [activitiesStatus, dispatch]);
  
  const activitiesMock = [
    { id: 2, name: "Titulo de prueba", description: "Descripcion de prueba" },
    { id: 1, name: "Titulo de prueba", description: "Descripcion de prueba" },
    { id: 3, name: "Titulo de prueba", description: "Descripcion de prueba" },
  ];

  if(activitiesMock !== null || activitiesMock !== undefined){
    errorAlert('Ha ocurrido un error', 'No hay actividades para mostrar', 'Continuar...')
  }

  return (
    <div>{ 
      // loading? 
      //   Loading() :
        <div>
          <Title title="Actividades" img="/images/banner-img.jpg" />
          <ul className="list-container">
            {activitiesMock.length > 0 ? (
              activitiesMock.map((activity) => {
                return (
                  <li className="card-info" key={activity.id}>
                    <h3>{activity.name}</h3>
                    <p>{activity.description}</p>
                  </li>
                );
              })
            ) 
            : (
              <p>No hay actividades</p>
            )
            }
          </ul>
        </div>
      }
    </div>
  );
};

export default ActivitiesList;
