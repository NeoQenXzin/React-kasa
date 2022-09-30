import React from "react";

export default function Arrow(props) {
  const arrow = document.querySelector(".arrow");
  props.toggle
    ? (arrow.style.transform = "rotate(-180deg) translateY(25%)")
    : (arrow.style.transform = "rotate(0deg) translateY(0%)");
  return <span className="arrow"></span>;
}
