import React from "react";
import posed from "react-pose";
import styled from "styled-components";
import { assignRelevantIcon } from "../constants/utils";

const SurveyCard = props => (
  <>
    <StyledCard className="card" onClick={props.onClick}>
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
  </>
);

export default SurveyCard;

const Card = posed.div({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});

const StyledCard = styled(Card)`
  width: 30%;
  margin: auto;
  margin-bottom: 3%;
  cursor: pointer;
  border-top: 7px solid #14465b;

  @media (max-width: 1024px) {
    width: 90%;
  }
`;
