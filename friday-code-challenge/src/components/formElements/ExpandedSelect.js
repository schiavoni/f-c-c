import { useState } from "react";
import Clickable from "./Clickable";
import classes from "./ExpandedSelect.module.css";

function ExpandedSelect(props) {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick(index) {
    setActiveIndex(index);
  }

  return (
    <div className={classes.ExpandedSelect}>
      {props.options.map(function (clickable, i) {
        return (
          <Clickable
            key={clickable}
            name={clickable}
            index={i}
            isActive={activeIndex === i}
            onTouch={handleClick}
          />
        );
      })}
    </div>
  );
}

export default ExpandedSelect;
