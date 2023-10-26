import { useState } from "react";

export default function CheckedTree({ initData }) {
  const [checked, setChecked] = useState(false);

  const toggleChecked = (id) => {
    console.log(id)
    setChecked(prev => !prev)
  }

  return (
    <div className="checked-tree-container">
      {initData.map((item) => {
        return (
          <ItemInCheckbox
            key={item.id}
            singleChild={item}
            checked={checked}
            toggleChecked={toggleChecked}
          />
        );
      })}
    </div>
  );
}

const ItemInCheckbox = ({
  singleChild: {  name,  isChecked, children }, checked, toggleChecked
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`checkbox-row-${name.toLowerCase()}`}>
      <div style={{ display: "flex" }}>
        <div onClick={() => setOpen((prev) => !prev)}>{open ? "V" : ">"}</div>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={() => toggleChecked()}
        ></input>
        <label htmlFor={name}>&nbsp;{name}</label>
      </div>
      {open &&
        children.map((child) => (
          <div
            className={`nested-child ${child.name.toLowerCase()}`}
            key={child.id}
          >
            <ItemInCheckbox thisClass="nested" singleChild={child} toggleChecked={toggleChecked} />
          </div>
        ))}
    </div>
  );
};

CheckedTree.propTypes = {
  initData: [],
};

ItemInCheckbox.propTypes = {
  singleChild: {
    id: Number,
    name: String,
    parentId: Number,
    isChecked: Boolean,
    children: Array,
  },
};
