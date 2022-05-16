import React from "react";

//defining the data types for props
type Props = {
  name: string;
  email: string;
  age?: number; //add ? to indicate that teh prop is optional
};

export default function Person({ name, email }: Props) {
  return (
    <div>
      <div>{name}</div>
      <div>{email}</div>
    </div>
  );
}
