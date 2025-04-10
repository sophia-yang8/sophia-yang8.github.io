import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [cake_data, setData1] = useState(null);

  const fetchCakeData = () => {
    fetch("https://happy-kitchen-backend-8fa23112d39e.herokuapp.com/cake_receipe/")
      .then((response) => {
        console.log("Did the url return the right response?")
        
        console.log(response)
        return response.json()
      })
      .then((ascsacas) => {
        console.log("Are we setting the data correctly?")
        setData1(ascsacas)
  })
      .catch((error) => console.error("Error fetching data:", error));
  }

  useEffect(() => {
    fetch("https://happy-kitchen-backend-8fa23112d39e.herokuapp.com/")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Happy Kitchen</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <button className = "App-cake_button" onClick={fetchCakeData}>
          Get Cake Receipe :D
        </button>
        <div className="App-cake_data">
  {cake_data ? (
    typeof cake_data === "object" ? (
      <>
        <h3>Ingredients:</h3>
        <ul>
          {Object.entries(cake_data.cake).map(([key, value], index) => (
            <li key={index}>
              {key}: {value}
            </li>
          ))}
        </ul>
        <h3>Instructions:</h3>
        <ol>
          {cake_data.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </>
    ) : (
      <pre>{cake_data}</pre>
    )
  ) : (
    "Nothing Else..."
  )}
</div>
        <a
          className="App-link"
          href="https://space.bilibili.com/18202105?spm_id_from=333.337.0.0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className= "App-link2"
          href="https://www.bilibili.com/video/BV1oS9tYDEfr/?spm_id_from=333.337.search-card.all.click"
          target = "_blank"
          rel = "noopener noreferrer"
        >  
          Fried Chicken Drums
        </a>
      </header>
    </div>
  );
}

export default App;
