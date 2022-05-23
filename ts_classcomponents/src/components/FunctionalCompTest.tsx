import { Button } from "@chakra-ui/react";
import { count } from "console";
import React, { useEffect, useState } from "react";

type Props = {};

function FunctionalCompTest({}: Props) {
  const [counter, setCounter] = useState(0);
  const [didMount, setMount] = useState(false);

  useEffect(() => {
    if (!didMount) {
      incrementCount();
      setMount(true);
    } else {
      console.log(counter);
    }
  }, [counter]);

  const incrementCount = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      {counter}
      <Button onClick={incrementCount}>Increment counter</Button>
    </div>
  );
}

export default FunctionalCompTest;
