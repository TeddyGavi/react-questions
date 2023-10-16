import { useState } from "react";
// import { items } from "./data";
const items = [
  { value: 1, isChecked: false },
  { value: 2, isChecked: false },
  { value: 3, isChecked: false },
  { value: 4, isChecked: false }
];

import "./style.css";

export default function App() {
  const [listLeft, setListLeft] = useState(items);
  const [listRight, setListRight] = useState([]);

  const handleCheckboxSelect = (list, index) => {
    const item = list[index];
    const value = !items[index].isChecked;
    item.isChecked = value;
    setListLeft((prev) => [...prev]);
    setListRight((prev) => [...prev]);
  };

  const moveListRight = (list) => {
    const dontMoveBoxes = list.filter((item) => !item.isChecked);
    const moveBoxes = list.filter((item) => item.isChecked);
    setListRight((prev) => [...prev, ...moveBoxes]);
    setListLeft(dontMoveBoxes);
  };

  const moveListLeft = (list) => {
    const dontMoveBoxes = list.filter((item) => !item.isChecked);
    const moveBoxes = list.filter((item) => item.isChecked);
    setListLeft((prev) => [...prev, ...moveBoxes]);
    setListRight(dontMoveBoxes);
  };

  const handleButtonClick = (e) => {
    const direction = e.target.value;

    if (direction === "right") {
      moveListRight(listLeft);
    } else {
      moveListLeft(listRight);
    }
  };

  // keep track of list of items in each box
  // keep track of list of items checked
  // transfer items checked when clicked

  return (
    <div className="appContainer">
      <List list={listLeft} handleCheckboxSelect={handleCheckboxSelect} />
      <div className="button-container">
        <Button handleButtonClick={handleButtonClick} direction="left" />
        <Button handleButtonClick={handleButtonClick} direction="right" />
      </div>
      <List list={listRight} handleCheckboxSelect={handleCheckboxSelect} />
    </div>
  );
}

function List({ list, handleCheckboxSelect }) {
  console.log(list);
  return (
    <div className="listContainer">
      <div className="checkbox-form">
        {list.map((item, i) => {
          return (
            <CheckBox
              handleCheckboxSelect={handleCheckboxSelect}
              key={i}
              checkboxId={item.value}
              index={i}
              list={list}
              checked={item.isChecked}
            />
          );
        })}
      </div>
    </div>
  );
}

function CheckBox({ checkboxId, index, checked, list, handleCheckboxSelect }) {
  return (
    <div className="checkbox-label">
      <input
        type="checkbox"
        onChange={() => handleCheckboxSelect(list, index)}
        id={`${checkboxId}`}
        name={`${checkboxId}`}
        checked={checked}
      />
      <label for={checkboxId}>{checkboxId}</label>
    </div>
  );
}

function Button({ direction, handleButtonClick }) {
  const buttonLabel = direction === "left" ? `<` : `>`;

  return (
    <button
      type="submit"
      id={`move-${direction}`}
      value={direction}
      onClick={(e) => handleButtonClick(e)}
    >
      {buttonLabel}
    </button>
  );
}
