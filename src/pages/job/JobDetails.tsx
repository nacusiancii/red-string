import React from "react";
import { useParams } from "react-router-dom";

const JobDetails: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Job Details Page</h1>
      <p>Job ID: {id}</p>
    </div>
  );
};

export default JobDetails;
