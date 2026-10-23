```jsx
import React, { useState } from "react";
import "./App.css";

function App() {
  // Initialize the counter with 0
  const [count, setCount] = useState(0);

  // Increment the counter
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement the counter
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Counter Application</h1>

      <h2>Count : {count}</h2>

      <button onClick={increment}>Increment</button>

      <br />
      <br />

      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
```
