/*
Vision
Just the header with a little joke in the title.

UT
Check if the props are set
Check if the joke works as expected.
*/
import A from "./../general/A";
import classes from "./Header.module.css";

let title = new Date().toLocaleDateString("en-US", { weekday: "long" });

function Header(props) {
  return (
    <header>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <A href="mailto:schiavoni.rt@gmail.com" title="Contact me at schiavoni.rt@gmail.com">Contact</A>
      </div>
    </header>
  );
}
export default Header;
