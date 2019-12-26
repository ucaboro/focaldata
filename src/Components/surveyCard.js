import React, { forwardRef } from "react";
import styled from "styled-components";
import { assignRelevantIcon } from "../constants/utils";

const SurveyCard = forwardRef((props, ref) => (
  <StyledCard ref={ref} className="card" onClick={props.onClick}>
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <span className="icon is-large">
            {assignRelevantIcon(props.name)}
          </span>
        </div>
        <div className="media-content">
          <p className="title is-4">{props.name}</p>
          <p className="subtitle is-6">Questions: {props.questions}</p>
        </div>
      </div>
    </div>
  </StyledCard>
));

export default SurveyCard;

const StyledCard = styled.div`
  width: 30%;
  margin: auto;
  margin-bottom: 3%;
  cursor: pointer;
  border-top: 7px solid #14465b;

  @media (max-width: 1024px) {
    width: 90%;
  }
`;
