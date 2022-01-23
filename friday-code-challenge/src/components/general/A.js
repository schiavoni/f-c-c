import classes from "./A.module.css";

function A(props) {
  return (
    <div>
      <a href={props.href} title={props.title} target="_blank" rel="noreferrer">
        {props.children}
      </a>
    </div>
  );
}
export default A;
