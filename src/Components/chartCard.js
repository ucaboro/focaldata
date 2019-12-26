import React from "react";

const ChartCard = props => (
  <>
    <div className="card" onClick={props.onClick}>
      <div className="card-content">{props.children}</div>
    </div>
  </>
);

export default ChartCard;
