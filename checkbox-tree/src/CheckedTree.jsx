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

const ItemInCheckbox = ({ singleChild, toggleChecked }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`checkbox-row-${singleChild.name.toLowerCase()}`}>
      <div style={{ display: "flex" }}>
        <div className="toggle-arrow" onClick={() => setOpen((prev) => !prev)}>
          {singleChild.children.length > 0 ? (open ? "V" : '>') : "--"}
        </div>
        <input
          type="checkbox"
          name={singleChild.name}
          checked={singleChild.isChecked}
          onChange={() => {
            toggleChecked(singleChild);
          }}
        ></input>
        <label htmlFor={singleChild.name}>&nbsp;{singleChild.name}</label>
      </div>
      {open &&
        singleChild.children.map((child) => (
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
  toggleChecked: PropTypes.func,
};
