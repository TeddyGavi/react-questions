import { useState } from "react";
import "./style.css";
export default function App() {
  const [point, setPoint] = useState([]);

  const handleClick = (e) => {
    console.log(e.clientX, e.clientY);
    setPoint([...point, { x: e.clientX, y: e.clientY }]);
  };

  return (
    <div className="clickMe" onClick={(e) => handleClick(e)}>
      {point.map(({ x, y }, i) => {
        return <div key={i} style={{top: y -50, left: x -50}} className="circle"></div>;
      })}
    </div>
  );
}
