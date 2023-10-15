import { useState } from "react";
// import { items } from "./data";
const items = [
  { value: 1, isChecked: false },
  { value: 2, isChecked: false },
  { value: 3, isChecked: false },
  { value: 4, isChecked: false }
];

import "./styles.css";

export default function App() {
  const [listLeft, setListLeft] = useState(items);
  const [listRight, setListRight] = useState([]);
  const [transfer, setTransfer] = useState([]);

  const handleCheckboxSelect = (e) => {
    const updated = items.map((item) => {
      if (item.value === parseInt(e.target.value)) {
        return { ...item, isChecked: e.target.checked };
      }
      return item;
    });
    setTransfer(updated);
    console.log(transfer);
  };

  const resetListState = (list) => {
    return list.map((item) => ({
      ...item,
      isChecked: false
    }));
  };

  const handleButtonClick = (e) => {
    const direction = e.target.value;
    const moveBoxes = transfer.filter((checkbox) => checkbox.isChecked);
    const dontMoveBoxes = transfer.filter((checkbox) => !checkbox.isChecked);

    if (dontMoveBoxes.length === 0) return;

    if (direction === "right") {
      setListRight(moveBoxes);
      setListLeft(dontMoveBoxes);
      setListRight((prev) => resetListState(prev));
      // setTransfer([]);
    } else {
      setListRight(dontMoveBoxes);
      setListLeft(moveBoxes);
      setListLeft((prev) => resetListState(prev));
      // setTransfer([]);
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
  return (
    <div className="listContainer">
      <div className="checkbox-form">
        {list.map((item) => {
          return (
            <CheckBox
              handleCheckboxSelect={handleCheckboxSelect}
              key={item.value}
              checkboxId={item.value}
              list={list}
            />
          );
        })}
      </div>
    </div>
  );
}

function CheckBox({ checkboxId, list, handleCheckboxSelect }) {
  return (
    <div className="checkbox-label">
      <input
        type="checkbox"
        onChange={(e) => handleCheckboxSelect(e)}
        id={`${checkboxId}`}
        name={`${checkboxId}`}
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
