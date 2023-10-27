import "./App.css";
import data from "./data";
import { useEffect, useState } from "react";
import buildTree from "./buildTree";
import CheckedTree from "./CheckedTree";

const Main = () => {
  const [formData, setFormData] = useState({ checkedTree: [] });
  const [initData, setInitData] = useState([]);


  useEffect(() => {
    setInitData(buildTree(data));
  }, []);


  const toggleChecked = (id, parentId) => {
    const newData = [...initData]
    for (const rootParent of newData ) {
      if (rootParent.id === parentId) {
        const toggleAllChildren = (node) => {
          console.log(node)
          if (node.children.length === 0) return;
          node.isChecked = !node.isChecked;
          node.children.forEach((child) => toggleAllChildren(child));
        };

        return toggleAllChildren(rootParent);
      }
    break;
    }
  setInitData(() => newData)
  };


  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="container">
      <h1>Mock Form</h1>
      <input placeholder="Mock Input" className="common" />
      <input placeholder="Mock Input" className="common" />
      <CheckedTree initData={initData} toggleChecked={toggleChecked}/>
      <button onClick={handleSubmit} className="common">
        Submit
      </button>
    </div>
  );
};

export default Main;
