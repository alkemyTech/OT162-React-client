import React from "react";
import Title from "../../Title/Title";
import ActivityContent from "./ActivityContent";

const ActivityDetail = () => {
  return (
    <>
      <Title title="Activity title" />
      <div className="content">
        <ActivityContent></ActivityContent>
      </div>
    </>
  );
};

export default ActivityDetail;
