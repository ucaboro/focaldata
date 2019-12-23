import React from "react";
import { useParams } from "react-router-dom";

const Survey = () => {
  let { id } = useParams();

  return (
    <div>
      <h2 className="title is-3"> Survey!: {id} </h2>
    </div>
  );
};

export default Survey;
