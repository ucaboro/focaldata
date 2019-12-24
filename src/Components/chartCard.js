import React from "react";
import posed from "react-pose";
import styled from "styled-components";

const ChartCard = props => (
  <>
    <StyledCard className="card" onClick={props.onClick}>
      <div className="card-content">{props.children}</div>
    </StyledCard>
  </>
);

export default ChartCard;

const Card = posed.div({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});

const StyledCard = styled(Card)``;
