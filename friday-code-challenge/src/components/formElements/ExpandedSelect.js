import { useState } from "react";
import Clickable from "./Clickable";
import classes from "./ExpandedSelect.module.css";

function ExpandedSelect(props) {
  const [activeIndex, setActiveIndex] = useState(null);
  const filtered = props.options.filter(o => String(o).toUpperCase().startsWith(props.filter.toUpperCase()));

  function handleClick(index) {
    setActiveIndex(index);
    props.onSet(filtered[index]);
  }

  return (
    <div className={classes.ExpandedSelectPosition}>
        <div className={classes.ExpandedSelect}>
      {filtered.map(function (clickable, i) {
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
    </div>
  );
}

export default ExpandedSelect;
