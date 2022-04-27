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

const ActivitiesList = () => {
  // const [loading, setLoading] = useState(true);
  // const [activities, setActivities] = useState([]);

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const activities = useSelector(selectActivities);
  const activitiesStatus = useSelector(getActivitiesStatus);
  const activitiesError = useSelector(getActivitiesError);

  useEffect(() => {
    
      // console.log(activities.data);   
      activitiesStatus === "idle" && dispatch(fetchActivities());
      console.log(activitiesStatus);     
      activitiesError !== null && errorAlert("Error", "Error al obtener actividades", "Ok")     

    // getActivities()
    //   .then((response) => setActivities(response.data.data))
    //   .catch((error) => errorAlert(error, error.message, "Ok"))
    //   .finally(() => setLoading(false));
  }, [activitiesStatus, dispatch, activitiesError]);

  return (
    <Box>
      {activitiesStatus === "loading" ? (
        <Loading open={true} />
      ) : (
        <>
          <Title title="Actividades" img="/images/banner-img.jpg" />
          <Grid container spacing={3} sx={{ m: "auto", p: "0 5em" }}>
            {activitiesStatus === "succeded" ? (
              activities.data.map((activity) => {
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
              })
            ) : (
              <p>No hay actividades</p>
            )}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default ActivitiesList;
