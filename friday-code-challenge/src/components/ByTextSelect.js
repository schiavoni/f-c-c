import classes from "./ByTextSelect.module.css";

function ByTextSelect(props) {
  return (
    <div>
      <label htmlFor="brandTxt">Brand:</label>
      <input type="text" placeholder="Brand" />
    </div>
  );
}

export default ByTextSelect;
