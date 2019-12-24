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

export function splitLongString(string) {
  return clipExcessText(string, 60).split("*");
}

function clipExcessText(text, limit) {
  let divider = "*";
  if (text.length <= limit) return text;

  let validText = text.slice(0, limit);
  let position = validText.lastIndexOf(" ");
  let excessText = text.slice(position);

  return [validText.slice(0, position), divider, excessText].join("");
}
