/*
Vision
The original idea was to simplify the search using text instead of a simple select.
Creating a little more interaction with this component would allow it to be the default for simple loaded lists.

UT
Check if all props are set
Check how if handles errors when loading
Check how it behaves (if filters) when setting the text
*/

import { useState, useEffect } from "react";
import ExpandedSelect from "./ExpandedSelect";
import classes from "./ByTextSelect.module.css";

function ByTextSelect(props) {
  const src = "http://localhost:8080/api/" + props.src;
  const [showSelect, setShowSelect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoadError, setHasLoadError] = useState(false);
  const [hasNoEntryError, setHasNoEntryError] = useState(false);

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
    console.log(src);
    fetch(src)
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoading(false);
          setHasLoadError(false);
          setOptions(result);
          setHasNoEntryError((result.length < 1));
        },
        (error) => {
          setIsLoading(false);
          setHasNoEntryError(false);
          setHasLoadError(true);
        }
      );
  }

  useEffect(() => {
    setIsLoading(true);
    forceReload();
    setInputText("");
  }, [props.src]);

  return (
    <div
      className={
        isLoading
          ? classes.selectIsLoading + " " + classes.ByTextSelect
          : hasLoadError
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
          placeholder={props.placeholder}
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
      {hasLoadError && (
        <button onClick={forceReload}>Reload {props.title}</button>
      )}
      {hasNoEntryError && (
        <div className={classes.hasNoEntryError}>
          Sorry, no {props.title} found for this filter. Please, change the
          previous filter.
        </div>
      )}
    </div>
  );
}

export default ByTextSelect;
