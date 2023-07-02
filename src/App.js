import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeigth] = useState("");
  const [superPower, setSuperPower] = useState("");
  const [displayCharter, setDisplayCharter] = useState(false);

  const checkValue = () => {
    if (name.length === 0 && age.length === 0 && height.length === 0) {
      alert("Please Enter the value");
    } else {
      setDisplayCharter(true);
    }
  };

  return (
    <div className="App">
      <h1>Build A Hero</h1>
      <div>
        <label htmlFor="">Name </label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="">Age </label>
        <input
          type="number"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <label htmlFor="">Height </label>
        <input
          type="text"
          onChange={(e) => {
            setHeigth(e.target.value);
          }}
        />
        <label htmlFor="">SuperPower </label>
        <input
          type="text"
          onChange={(e) => {
            setSuperPower(e.target.value);
          }}
        />
      </div>
      <button
        onClick={checkValue}
        // onClick={() => {
        //   setDisplayCharter(true);
        // }}
      >
        Display Character
      </button>
      <div>
        <h1>Hero Info</h1>
        {displayCharter && (
          <ul>
            <li> Name : {name}</li>
            <li>Age : {age}</li>
            <li>Height : {height}</li>
            <li> SuperPower: {superPower}</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
