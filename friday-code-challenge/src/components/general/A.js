/*
Vision
To be used as a template for links with the most basic attrs the project needs

UT
Check if all props are set
Only allow textlike elements as children
*/

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
