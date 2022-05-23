import "../CardListStyles.css";
import Title from "../Title/Title";
import { errorAlert } from "../../features/alerts/alerts";
import { useEffect, useState } from "react";
import Loading from "../Utilities/Loading";
import { getActivities } from "../../Services/activitiesApiService";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import {
  selectActivities,
  getActivitiesStatus,
  getActivitiesError,
  fetchActivities
} from "../../features/activities/activitiesSlice";
import ActivitiesFinder from "./ActivitiesFinder";
import './ActivitiesList.css';

const ActivitiesList = () => {  

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const activities = useSelector(selectActivities);
  const activitiesStatus = useSelector(getActivitiesStatus);
  const activitiesError = useSelector(getActivitiesError);
  const [filteredActivities, setFilteredActivities] = useState(activities.data)

  const handleChange = (e) => {
    const {value} = e.target;
    if(value.length >= 3){
      setFilteredActivities(activities.data.filter(activity => activity.name.toLowerCase().includes(value.toLowerCase())))
    }else {
      setFilteredActivities(activities.data)
    }
  }

  useEffect(() => {    
     
      activitiesStatus === "idle" && dispatch(fetchActivities());
      setFilteredActivities(activities.data)
      console.log(activitiesStatus);     
      console.log(activities.data);
      activitiesError !== null && errorAlert("Error", "Error al obtener actividades", "Ok")     
    
  }, [activitiesStatus, dispatch, activitiesError, activities]);

  return (
    <Box>
      {activitiesStatus === "loading" ? (
        <Loading open={true} />
      ) : (
        <>
          <Title title="Actividades" img="/images/banner-img.jpg" />
          {/* <ActivitiesFinder activities={activities}/> */}
          <input className="filter" type={'text'} name="filter" placeholder={'Buscar actividades'} onChange={handleChange }/>
          <Grid container spacing={3} sx={{ m: "auto", p: "0 5em" }}>
            {filteredActivities ? (

              filteredActivities.length > 0 && (
                filteredActivities.map((activity) => {
                  return (
                    <Grid item xs={12} sm={6} md={3} key={activity.id}>
                      <Card sx={{ maxWidth: 345, height: "100%" }}>
                        <CardActionArea
                          onClick={() => navigate(`/actividades/${activity.id}`)}
                        >
                          <CardMedia
                            component="img"
                            height="140"
                            image={activity.image}
                            alt={activity.name}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              {activity.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              dangerouslySetInnerHTML={{
                                __html: activity.description,
                              }}
                            />
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  );            
                }

              )))
             : (
              <p>No hay actividades</p>
            )}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default ActivitiesList;
