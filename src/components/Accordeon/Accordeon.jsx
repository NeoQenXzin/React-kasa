import { useState } from "react";

function Accordeon(props) {
  const [toggle, setToggle] = useState(false);

  const changeState = () => {
    const arrow = document.getElementById(`${props.title}`);
    !toggle
      ? (arrow.style.transform = "rotate(-180deg) translateY(25%)")
      : (arrow.style.transform = "rotate(0deg) translateY(0%)");
    setToggle(!toggle);
  };
  return (
    <li>
      <h2 onClick={() => changeState()}>
        {props.title} <span id={props.title} className="arrow"></span>
      </h2>
      <div className={toggle ? "open" : "close"}>{props.content}</div>
    </li>
  );
}

export default Accordeon;
