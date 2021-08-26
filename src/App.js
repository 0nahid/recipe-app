import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const APP_ID = "029e10a0";
  const APP_KEY = "673e752ed76f1223e5db4b24d368307a";
  useEffect(() => {
    getRecipes();
  }, []);
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=beef&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
  };
  return (
    <div>
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search Now!
        </button>
      </form>
    </div>
  );
}

export default App;
