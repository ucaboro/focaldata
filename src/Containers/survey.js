import React from "react";
import posed from "react-pose";
import ChartWrapper from "../Components/charts/index";

const Survey = props => {
  const { questions, title } = props.location.state;
  return (
    <>
      <h2 className="title is-3"> {title} </h2>
      <Wrapper>
        <div className="columns is-multiline">
          {questions.map(question => (
            <div className="column is-4" key={question.questionId}>
              {question.questionId !== 2 ? (
                <ChartWrapper type="pie" data={question} />
              ) : (
                //example showing additional chart type implementation
                <ChartWrapper type="radar" data={question} />
              )}
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 }
});

export default Survey;
