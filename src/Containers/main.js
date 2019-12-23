import React, { useState, useEffect } from "react";
import SurveyCard from "../Components/surveyCard";
import posed from "react-pose";

import { useHistory } from "react-router-dom";

const Main = () => {
  let history = useHistory();
  const [loaded, changeLoaded] = useState(false);
  useEffect(() => {
    changeLoaded(!loaded);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSurveyClick = id => {
    history.push(`/survey/${id}`);
  };

  return (
    <div>
      <h2 className="title is-3"> Existing Surveys:</h2>

      <Wrapper pose={loaded ? "open" : "closed"}>
        <SurveyCard
          name="Brexit"
          questions="3"
          onClick={() => onSurveyClick("Brexit")}
        />
        <SurveyCard
          name="Ennvironment"
          questions="5"
          onClick={() => onSurveyClick("Ennvironment")}
        />
        <SurveyCard
          name="US"
          questions="2"
          onClick={() => onSurveyClick("US Elections")}
        />
      </Wrapper>
    </div>
  );
};

const Wrapper = posed.div({
  open: {
    opacity: "100%",
    delayChildren: 100,
    staggerChildren: 90
  },
  closed: { opacity: "0%", delay: 300 }
});

export default Main;
