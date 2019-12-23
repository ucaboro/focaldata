/* eslint-disable no-unreachable */
import React from "react";

export function assignRelevantIcon(title) {
  switch (true) {
    case title.includes("Brexit"):
      return <i className="fa fa-3x fa-door-open"></i>;
      break;
    case title.includes("Environment"):
      return <i className="fa fa-3x fa-leaf"></i>;
      break;
    case title.includes("US"):
      return <i className="fa fa-3x fa-flag-usa"></i>;
      break;

    default:
      return <i className="fa fa-3x fa-question"></i>;
      break;
  }
}
