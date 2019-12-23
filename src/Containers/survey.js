import React from "react";
import { useParams } from "react-router-dom";
import ChartCard from "../Components/chartCard";
import posed from "react-pose";

const Survey = () => {
  let { id } = useParams();

  return (
    <div>
      <h2 className="title is-3"> Survey!: {id} </h2>
      <Wrapper>
        <div className="columns is-mobile is-multiline">
          <div className="column is-4">
            <ChartCard />
          </div>
          <div className="column is-4">
            <ChartCard />
          </div>
          <div className="column is-4">
            <ChartCard />
          </div>
          <div className="column is-4">
            <ChartCard />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = posed.div({
  enter: { staggerChildren: 50 },
  exit: { staggerChildren: 20, staggerDirection: -1 }
});

export default Survey;
