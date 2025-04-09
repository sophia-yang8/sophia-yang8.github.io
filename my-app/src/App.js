import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://happy-kitchen-backend-8fa23112d39e.herokuapp.com/")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{data ? JSON.stringify(data) : "Nothing Else..."}</p>
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
