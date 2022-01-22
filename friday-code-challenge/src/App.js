import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="withProgress-bar">
        <div>
          <h1>Sunday</h1>
        </div>
        <div>
          <p>Contact</p>
        </div>
      </header>
      <section>
        <div>
          <h2>Your best car</h2>
          <p>To continue with the ensurance simulation, we need to know what's your beloved car model.</p>
          <small>Tip: use <em>enter</em> to set the selection and move to the next field.</small>
        </div>
        <div className="form">
          <div className="withProgress-ul">
            <ul>
              <li>
                <label htmlFor="brandTxt">Brand:</label>
                <input type="text" placeholder="Brand" />
              </li>
              <li>
                <label htmlFor="brandTxt">Model:</label>
                <input type="text" placeholder="Brand" />
              </li>
              <li>
                <label htmlFor="brandTxt">Engine capacity between:</label>
                <input type="range" min="500" max="5000" value="1000" />
                <p>and</p>
                <input type="range" min="500" max="5000" value="1000" />
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
                <div><label htmlFor="" className="make">Brand</label><input type="text" placeholder="make" /></div>
                <div><label htmlFor="" className="make">Model</label><input type="text" placeholder="make" /></div>
                <div><label htmlFor="" className="make">Body</label><input type="text" placeholder="make" /></div>
              </fieldset>
              <fieldset>
                <legend>Engine stats:</legend>
                <div><label htmlFor="" className="make">Capacity</label><input type="text" placeholder="make" /></div>
                <div><label htmlFor="" className="make">Engine power</label><input type="text" placeholder="PS" /> / <input type="text" placeholder="KW" /></div>
                <div><label htmlFor="" className="make">Fuel</label><input type="text" placeholder="make" /></div>
              </fieldset>
            </div>
            <button>That's my car!</button>
          </div>
          <div>
            <button>Continue</button>
          </div>
        </div>
      </section>
      <footer>
        <small>Please, keep in mind that this is just a test and has nothing to do with the real Friday.de company.</small>
      </footer>
    </div>
  );
}

export default App;
