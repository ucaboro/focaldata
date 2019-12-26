import React from "react";
import renderer from "react-test-renderer";
import Navbar from "../Components/navbar";
import SurveyCard from "../Components/surveyCard";
import PieChart from "../Components/charts/pieChart";
import RadarChart from "../Components/charts/radarChart";
import ChartCard from "../Components/chartCard";
import Main from "../Containers/main";
import Survey from "../Containers/survey";
import { BrowserRouter as Router } from "react-router-dom";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure, mount } from "enzyme";

import {
  assignRelevantIcon,
  splitLongString,
  clipExcessText
} from "../constants/utils";

configure({ adapter: new Adapter() });

const longText =
  "Testing a long string with more than 60 characters to check that it splits properly";
const shortText = "short text";

describe("App functions", () => {
  describe("Splitting long string", () => {
    it("should return short text", () => {
      let result = clipExcessText(shortText, 60);
      expect(result).toEqual(shortText);
    });
    it("should split long text with *", () => {
      let result = clipExcessText(longText, 60);
      expect(result).toContain("*");
    });
    it("should return splitted array", () => {
      let result = splitLongString(longText);
      expect(result).toHaveLength(2);
    });
  });
  const texts = [
    "brexit was postponed",
    "US elections",
    "care about environment",
    "text with no keywords"
  ];

  describe("Assigning icons to text", () => {
    it("should return door icon", () => {
      let result = assignRelevantIcon(texts[0]);
      expect(result.props.className).toEqual("fa fa-3x fa-door-open");
    });
    it("should return flag icon", () => {
      let result = assignRelevantIcon(texts[1]);
      expect(result.props.className).toEqual("fa fa-3x fa-flag-usa");
    });
    it("should return leaf icon", () => {
      let result = assignRelevantIcon(texts[2]);
      expect(result.props.className).toEqual("fa fa-3x fa-leaf");
    });
    it("should return question icon", () => {
      let result = assignRelevantIcon(texts[3]);
      expect(result.props.className).toEqual("fa fa-3x fa-question");
    });
  });
});

//SNAPSHOTS
describe("Snapshots", () => {
  describe("Components", () => {
    test("navbar renders", () => {
      const component = renderer.create(
        <Router>
          <Navbar />
        </Router>
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    test("surveyCard renders", () => {
      const component = renderer.create(
        <SurveyCard key={"1"} name={"title"} questions={"4"} />
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    test("chartCard renders", () => {
      const component = renderer.create(<ChartCard />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    const data = {
      questionId: 1,
      questionTitle: "test title",
      answerOptions: [
        { answerOption: 1, text: "text", selectedByRespondents: 40 },
        { answerOption: 2, text: "text 2", selectedByRespondents: 60 }
      ]
    };

    describe("Charts", () => {
      test("RadarChart renders", () => {
        const wrapper = shallow(
          <RadarChart
            data={data.answerOptions}
            title={data.questionTitle}
            colors={["#35477d", "#6c5b7b", "#c06c84", "#FF6E5A", "#f67280"]}
          />,
          { lifecycleExperimental: true }
        );

        expect(wrapper).toMatchSnapshot();
      });
      test("PieChart renders", () => {
        const wrapper = shallow(
          <PieChart
            data={["1", "2"]}
            title={"data.questionTitle"}
            colors={["#35477d", "#6c5b7b", "#c06c84", "#FF6E5A", "#f67280"]}
          />,
          { lifecycleExperimental: true }
        );
        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe("Containers", () => {
    test("Main page renders with children", () => {
      const wrapper = mount(
        <Router>
          <Main />
        </Router>
      );
      expect(wrapper).toMatchSnapshot();
    });
    test("Survey page renders with children", () => {
      const wrapper = mount(
        <Router>
          <Survey />
        </Router>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
