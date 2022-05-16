import { Button, Input } from "@chakra-ui/react";
import { count } from "console";
import React, { useState, ChangeEvent } from "react";
import { HairColor } from "../Enums";

//defining the data types for props
type Props = {
  name: string;
  email: string;
  age?: number; //add ? to indicate that teh prop is optional
};

export default function Person({ name, email }: Props) {
  //defining states
  const [country, setCountry] = useState<string | null>(null); //aceepts data with type string or null

  //function with event as parameter
  const changeCountry = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
    console.log(country);
  };

  //Strict variable declaration and assignment
  type NameType = "Andy" | "John";
  const otherName: NameType = "John"; //can only assign names Andy or John to otherName

  return (
    <div>
      <div>{name}</div>
      <div>{email}</div>
      <div>{HairColor.Black}</div>
      <Input onChange={(event) => changeCountry(event)} />
    </div>
  );
}
