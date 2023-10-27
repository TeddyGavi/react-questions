import { useState } from "react";
import PropTypes from "prop-types";

export default function CheckedTree({ initData, toggleChecked }) {
  return (
    <div className="checked-tree-container">
      {initData.map((item) => {
        return (
          <ItemInCheckbox
            key={item.id}
            singleChild={item}
            isChecked={item.isChecked}
            toggleChecked={toggleChecked}
          />
        );
      })}
    </div>
  );
}

const ItemInCheckbox = ({
  singleChild: { id, parentId, name, isChecked, children },
  toggleChecked,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`checkbox-row-${name.toLowerCase()}`}>
      <div style={{ display: "flex" }}>
        <div onClick={() => setOpen((prev) => !prev)}>{open ? "V" : ">"}</div>
        <input
          type="checkbox"
          name={name}
          checked={isChecked}
          onChange={() => toggleChecked(id, parentId)}
        ></input>
        <label htmlFor={name}>&nbsp;{name}</label>
      </div>
      {open &&
        children.map((child) => (
          <div
            className={`nested-child ${child.name.toLowerCase()}`}
            key={child.id}
          >
            <ItemInCheckbox
              singleChild={child}
              isChecked={child.isChecked}
              toggleChecked={toggleChecked}
            />
          </div>
        ))}
    </div>
  );
};
CheckedTree.propTypes = {
  initData: PropTypes.array.isRequired,
  toggleChecked: PropTypes.func,
};

ItemInCheckbox.propTypes = {
  singleChild: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    parentId: PropTypes.number,
    isChecked: PropTypes.bool.isRequired,
    children: PropTypes.array,
  }).isRequired,
  toggleChecked: PropTypes.func.isRequired,
};
