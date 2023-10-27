import "./App.css";
import { useState } from "react";
import treeData from "./buildTree";
import CheckedTree from "./CheckedTree";
import { findRootParent, toggleChildren } from "./helpers";

const Main = () => {
  const [formData, setFormData] = useState({ checkedTree: [] });
  const [initData, setInitData] = useState(treeData);

  const toggleChecked = (singleChild) => {
    const newTree =[...initData] 
    const rootParent = findRootParent(singleChild, newTree);

    toggleChildren(newTree, singleChild.id);
    setInitData(newTree);
  };
  

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="container">
      <h1>Mock Form</h1>
      <input placeholder="Mock Input" className="common" />
      <input placeholder="Mock Input" className="common" />
      <CheckedTree initData={initData} toggleChecked={toggleChecked} />
      <button onClick={handleSubmit} className="common">
        Submit
      </button>
    </div>
  );
};

export default Main;
