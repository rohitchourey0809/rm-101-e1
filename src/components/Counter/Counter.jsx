import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  // let count = 0;
  // const [setcount] = useState(count);
  // NOTE: do not delete `data-testid` key value pair

  const [count, setcount] = useState(0);
  const handleInc = (e) => {
    setcount(count + 1);
    // console.log({ ...count });
  };
  const handleDec = (e) => {
    setcount(count - 1);
    // console.log(...count, e.target.value - 1);
    // count--;
  };

  return (
    <div className={styles.counter}>
      <button
        data-testid="task-counter-increment-button"
        value={count}
        onClick={handleInc}
      >
        increment
      </button>
      <span data-testid="task-counter-value">{count}</span>
      <button
        data-testid="task-counter-decrement-button"
        value={count}
        onClick={handleDec}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
