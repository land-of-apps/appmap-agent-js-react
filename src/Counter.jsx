import React, { useState } from 'react';

export const Counter = (props) => {
  const [count, setCount] = useState(props.init);
  const increment = () => setCount(count + 1);
  return (
    <button onClick={increment}>
      Click count: {count}
    </button>
  );
};
