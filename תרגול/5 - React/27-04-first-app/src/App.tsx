import React from "react";
import "./App.css";
import Song from "./components/Song";
import dataSongs from "./data/index";

function App() {
  // console.log(dataSongs);

  // const data = dataSongs.map((s) => {
  //   return s.name + " song";
  // });

  return (
    <ul>
      {dataSongs.map((song) => {
        return <Song song={song} />;
      })}
    </ul>
  );
}

export default App;
