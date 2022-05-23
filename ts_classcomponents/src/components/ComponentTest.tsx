import { Button, Text } from "@chakra-ui/react";
import React, { Component } from "react";

interface Props {}

interface state {
  name: string;
  counter: number;
}

export default class ComponentTest extends React.Component<Props, state> {
  constructor(props: Props) {
    super(props);
    this.state = { name: "hello", counter: 0 };

    this.incrementCounter = this.incrementCounter.bind(this);
  }

  //asynchronously logs state
  private incrementCounter(): void {
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(this.state.counter);
    });
  }

  //changes state after render, but does not displays it until state is changed
  componentDidMount() {
    this.incrementCounter();
    // console.log(this.state.counter);
  }

  render() {
    return (
      <div>
        <Text>{this.state.name}</Text>
        <Text>{this.state.counter}</Text>
        <Button onClick={this.incrementCounter}>Click to increment</Button>
      </div>
    );
  }
}
