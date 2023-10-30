import "./App.css";
import { useState } from "react";
import CheckedTree from "./CheckedTree";
import { findRootParent, toggleParents, treeData, filterTree } from "./helpers";

const Main = () => {
  const [formData, setFormData] = useState({ checkedTree: [] });
  const [initData, setInitData] = useState(treeData);

  const toggleChecked = (singleChild) => {
    const newTree = [...initData];
    toggleParents(newTree, singleChild.id);
    setInitData(newTree);
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  const filter = (e) => {
    const searchString = e.target.value;
    const tree = filterTree(searchString, initData);
    console.log(tree)
    setInitData(tree);
  };

  return (
    <div className="container">
      <h1>Mock Form</h1>
      <input onChange={filter} placeholder="Search..." className="common" />
      <CheckedTree initData={initData} toggleChecked={toggleChecked} />
      <button onClick={handleSubmit} className="common">
        Submit
      </button>
    </div>
  );
};

export default Main;
