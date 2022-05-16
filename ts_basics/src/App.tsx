import React from "react";
import "./App.css";
import Person from "./components/Person";

function App() {
  //declare variables of a specific type

  const name: string = "Andy";
  const age: number = 12;
  const isMarried: boolean = false;

  //declaring a function (declare type for parameter and function)
  const getAge = (name: string): number => {
    if (name === "Andy") {
      return 20;
    } else {
      return -1;
    }
  };
  return (
    <div className="App">
      {name}
      <Person name="John" email="crazy@gmail.com" />
    </div>
  );
}

export default App;
