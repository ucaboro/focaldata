import React, { useState, useEffect } from "react";
import SurveyCard from "../Components/surveyCard";
import posed from "react-pose";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Main = () => {
  const [data, setData] = useState({ surveys: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const url = "https://my-json-server.typicode.com/focaldata/demo/db";

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      try {
        const result = await axios(url);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  let history = useHistory();

  const onSurveyClick = (title, surveyId) => {
    history.push({
      pathname: `/survey/${title}`,
      state: data.surveys[surveyId - 1]
    });
  };
  const surveyList = data.surveys.map(survey => (
    <Card
      key={survey.surveyId}
      name={survey.title}
      questions={survey.questions.length}
      onClick={() => onSurveyClick(survey.title, survey.surveyId)}
    />
  ));

  return (
    <>
      <h2 className="title is-3"> Existing Surveys:</h2>
      <Wrapper>
        {isError && <div>Problem with fetching data</div>}
        {isLoading ? <div>Loading ...</div> : surveyList}
      </Wrapper>
    </>
  );
};

const Wrapper = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 }
});

const Card = posed(SurveyCard)({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});

export default Main;
