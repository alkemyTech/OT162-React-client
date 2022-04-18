import { useParams } from "react-router-dom";
import Title from "../../Title/Title";
import { useState, useEffect } from "react";
import { getActivitiesById } from "../../../Services/activitiesApiService";
import Loading from "../../Utilities/Loading";
import { errorAlert } from "../../../features/alerts/alerts";
import ActivityContent from "./ActivityContent";

const ActivityDetail = () => {
  const id = useParams();
  const [loading, setLoading] = useState(false);
  const [activity, setActivity] = useState({});
  useEffect(() => {
    setLoading(true);
    getActivitiesById(id.id)
      .then((response) => setActivity(response.data.data))
      .catch((error) => errorAlert(error, error.message, "Ok"))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading open={true} />
      ) : (
        <>
          <Title title={activity.name} />
          <div className="content">
            <ActivityContent description={activity.description} />
          </div>
        </>
      )}
    </>
  );
};

export default ActivityDetail;
