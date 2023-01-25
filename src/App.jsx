import React from "react";
import { Counter } from "./counter";

export const App = () => {
  return (
    <div>
      <h1>Counter</h1>
      <Counter init={0} />
    </div>
  );
};
