import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

import "./App.css";

function App() {
  const { data, isFetching, isError, refetch } = useQuery("food", () =>
    axios.get("https://foodish-api.herokuapp.com/api/")
  );

  if (isError) {
    return <p>Oops an error happened</p>;
  }

  return (
    <div className="App">
      <h1>Random Food Generator</h1>
      <button className="button" type="button" onClick={() => refetch()}>
        Generate
      </button>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <img className="image" src={data?.data?.image} alt="food" />
      )}
    </div>
  );
}

export default App;
