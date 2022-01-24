import { useRef, useState } from "react";
import ByTextSelect from "../formElements/ByTextSelect";
import classes from "./SectionSelectCar.module.css";

function SectionSelectCar() {
  const makesRef = useRef();
  const modelRef = useRef();

  const [modelSrc, setModelSrc] = useState("");
  const [progress, setProgress] = useState(0);

  function handleMakes(maker) {
    if (maker != "") {
      setModelSrc("models?make=" + maker);
      setProgress(1);
    } else {
      setModelSrc("");
      setProgress(0);
    }
  }
  function handleModel(model) {
    console.log("model:" + model);
  }

  function submitHandler(event) {
    event.preventDefault();

    const userCar = {
      make: makesRef.current.value,
      model: modelRef.current.value,
      enginePowerPS: 71,
      enginePowerKW: 52,
      fuelType: "Benzin",
      bodyType: "Limousine",
      engineCapacity: 1368,
    };

    console.log(userCar);
  }
  return (
    <section className={classes.SectionSelectCar}>
      <div>
        <h2>Your best car</h2>
        <p>
          To continue with the ensurance simulation, we need to know what's your
          beloved car model.
        </p>
      </div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <ul>
            <li>
              <ByTextSelect
                src="makes"
                title="Brands"
                placeholder="VW, Ford, Audi..."
                innerRef={makesRef}
                onSelect={handleMakes}
              />
            </li>
            <li>
              {progress > 0 && (
                <ByTextSelect
                  src={modelSrc}
                  title="Model"
                  placeholder="Golf, Fiesta, A3..."
                  innerRef={modelRef}
                  onSelect={handleModel}
                />
              )}
            </li>
            <li>
              <label htmlFor="brandTxt">Engine capacity between:</label>
              <input type="range" min="500" max="5000" defaultValue="1000" />
              <p>and</p>
              <input type="range" min="500" max="5000" defaultValue="1000" />
            </li>
            <li>
              <label htmlFor="brandTxt">Check:</label>
              <input type="text" placeholder="Brand" />
            </li>
          </ul>
        </div>
        <div className="checkOutInfo">
          <div className="carDescription">
            <fieldset>
              <legend>Car type:</legend>
              <div>
                <label htmlFor="" className="make">
                  Brand
                </label>
                <input type="text" placeholder="make" />
              </div>
              <div>
                <label htmlFor="" className="make">
                  Model
                </label>
                <input type="text" placeholder="make" />
              </div>
              <div>
                <label htmlFor="" className="make">
                  Body
                </label>
                <input type="text" placeholder="make" />
              </div>
            </fieldset>
            <fieldset>
              <legend>Engine stats:</legend>
              <div>
                <label htmlFor="" className="make">
                  Capacity
                </label>
                <input type="text" placeholder="make" />
              </div>
              <div>
                <label htmlFor="" className="make">
                  Engine power
                </label>
                <input type="text" placeholder="PS" /> /{" "}
                <input type="text" placeholder="KW" />
              </div>
              <div>
                <label htmlFor="" className="make">
                  Fuel
                </label>
                <input type="text" placeholder="make" />
              </div>
            </fieldset>
          </div>
          <button>That's my car!</button>
        </div>
        <div>
          <button>Continue</button>
        </div>
      </form>
    </section>
  );
}

export default SectionSelectCar;
