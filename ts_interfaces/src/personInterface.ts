//Interfaces : describe properties/ structure of a class, object

export interface Person {
  name: string;
  age: number;
}

//Interfaces can be extended
export interface detailedPerson extends Person {
  hobby: string;
}

//Interfaces to describe a function
export interface Greetings {
  (name: string): string;
}

//Assigning a function, using the structure of the interface
export const greetFriendlyPeople: Greetings = (name: string) => {
  return name;
};
