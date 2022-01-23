import { useState, useEffect } from "react";
import ExpandedSelect from "./ExpandedSelect";
import classes from "./ByTextSelect.module.css";

function ByTextSelect(props) {
  const src = "http://localhost:8080/api/" + props.src;
  const [showSelect, setShowSelect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [inputText, setInputText] = useState("");
  const [filterText, setFilterText] = useState("");
  const [options, setOptions] = useState([]);

  const myId = "ByTextSelect" + props.title.replace(/[\W_]+/g, "");

  function changeHandler(e) {
    setInputText(e.target.value);

    if (e.target.value) {
      setFilterText(String(e.target.value).substring(0, 1));
    } else {
      setFilterText("");
    }

    setShowSelect(true);
  }

  function setSelectHandler(selected) {
    setInputText(selected);
    setShowSelect(false);
    props.onSelect(selected);
  }

  const handleFocus = (event) => {
    event.target.select();
    setShowSelect(showSelect ? false : true);
  };

  function forceReload() {
    fetch(src)
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoading(false);
          setHasError(false);
          setOptions(result);
        },
        (error) => {
          setIsLoading(false);
          setHasError(true);
        }
      );
  }

  useEffect(() => {
    setIsLoading(true);
    forceReload();
  }, []);

  return (
    <div
      className={
        isLoading
          ? classes.selectIsLoading + " " + classes.ByTextSelect
          : hasError
          ? classes.hasError + " " + classes.ByTextSelect
          : classes.ByTextSelect
      }
    >
      <label htmlFor={myId}>{props.title}:</label>
      <div className={classes.input}>
        <input
          id={myId}
          ref={props.innerRef}
          type="text"
          placeholder="VW, BWM, Ford..."
          onChange={changeHandler}
          onClick={handleFocus}
          value={inputText}
        />
      </div>
      <div className={classes.ExpandedSelect}>
        {showSelect && (
          <ExpandedSelect
            options={options}
            filter={filterText}
            onSet={setSelectHandler}
          />
        )}
      </div>
      {hasError && <button onClick={forceReload}>Reload {props.title}</button>}
    </div>
  );
}

export default ByTextSelect;
