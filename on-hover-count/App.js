/* 
Hover Counter
Create a component called App that displays the number of times the user has hovered a button with the text “Hover Me”. The count should be displayed in an h1 element and updated each time the user hovers over the button. The initial value of the count should be set to 0.
 */
import { useState } from "react";

const App = () => {
  // Edit this component
  const [count, setCount] = useState(0);

  const handleHover = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <button data-testid="button" onMouseOver={handleHover}>
        Hover Me
      </button>
      <h1 data-testid="count">{count}</h1>
    </div>
  );
};

export default App;
