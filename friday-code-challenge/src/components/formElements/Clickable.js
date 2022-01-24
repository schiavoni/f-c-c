/*
Vision
Just a default type of button with some style and the minimal props

UT
Check if all props are set
*/
function Clickable(props) {
  function handleClick() {
    props.onTouch(props.index)
  }

  return (
    <div>
      <button
        type="button"
        className={props.isActive ? "active" : ""}
        onClick={handleClick}
      >
        <span>{props.name}</span>
      </button>
    </div>
  );
}

export default Clickable;
