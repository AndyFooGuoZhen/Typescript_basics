import React from "react";
import { detailedPerson, greetFriendlyPeople, Person } from "./personInterface";

//Declaring a Person object to me
const me: Person = {
  name: "Andy",
  age: 8,
};

//Declaring a detailedPerson object to me
const John: detailedPerson = {
  name: "John",
  age: 19,
  hobby: "Swimming",
};

function App() {
  return <div className="App">{greetFriendlyPeople("Wassup")}</div>;
}

export default App;
