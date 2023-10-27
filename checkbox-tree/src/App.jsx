import "./App.css";
import data from "./data";
import { useState } from "react";
import buildTree from "./buildTree";
import CheckedTree from "./CheckedTree";

const treeData = buildTree(data);

const Main = () => {
  const [formData, setFormData] = useState({ checkedTree: [] });
  const [initData, setInitData] = useState(treeData);

  const toggleChecked = (id, parentId) => {
    console.log(parentId);
    const newData = [...initData];
    for (const rootParent of newData) {
      const toggleAllChildren = (node) => {
        console.log(node.id);
        if (node.children.length === 0 || node.id === id) return;
        if (node.id === id) {

          node.isChecked = !node.isChecked;
          node.children.forEach((child) => toggleAllChildren(child));
        }
      };

      if (rootParent.id === parentId) {
       return toggleAllChildren(rootParent);
      } else  { 
        toggleAllChildren(rootParent)
      }
    }
    setInitData([...newData]);
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
