import React from "react";
import Counter from "./counter";

export default () => {
  return (
    <div>
      <h1>Counter</h1>
      <Counter init={0} />
    </div>
  );
};
