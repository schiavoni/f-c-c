import { useState } from "react";
import ExpandedSelect from "./ExpandedSelect";
import classes from "./ByTextSelect.module.css";

function ByTextSelect(props) {
  const [selectIsLoading, setSelectIsLoading] = useState(false);
  const [selectIsLoaded, setSelectIsLoaded] = useState(false);
  const [options, setOptions] = useState([]);

  const myId = "ByTextSelect" + props.title.replace(/[\W_]+/g,"");

  let lastTypingStartTime = 0;
  let timerTyping = undefined;

  function typingHandler(e) {
    setSelectIsLoading(true);
    let now = Date.now();
    let betweenTypingTime = 0;
    
    if (lastTypingStartTime > 0){
      betweenTypingTime = now - lastTypingStartTime;
      lastTypingStartTime = now;
    } else {
      lastTypingStartTime = now;
    }

    if(betweenTypingTime < 500){
      clearTimeout(timerTyping);
    }
    timerTyping = setTimeout(trySearch,1000);
  }

  function trySearch(){
    console.log("trySearch!");
    setOptions(["item 1", "item 2", "item 3"]);
  }

  return (
    <div className={selectIsLoading? "selectIsLoading " + classes.ByTextSelect:classes.ByTextSelect}>
      <label htmlFor={myId}>{props.title}:</label>
      <div>
        <input
          id={myId}
          type="text"
          placeholder="VW, BWM, Ford..."
          onKeyPress={typingHandler}
        />
      </div>
      {selectIsLoading && <ExpandedSelect options={options} />}
    </div>
  );
}

export default ByTextSelect;
