import React from "react";
import star from "./star.png";
import starpink from "./star-pink.png";

export default function Rating(props) {
  return (
    <img
      className=""
      src={props.number <= props.rate ? starpink : star}
      alt="star icone notation"
    />
  );
}
