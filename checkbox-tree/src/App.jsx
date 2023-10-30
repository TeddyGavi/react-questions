import "./App.css";
import { useState } from "react";
import CheckedTree from "./CheckedTree";
import { toggleParents, treeData, filterTree } from "./helpers";

const Main = () => {
  const [initData, setInitData] = useState(treeData);

  const toggleChecked = (singleChild) => {
    const newTree = [...initData];
    toggleParents(newTree, singleChild.id);
    setInitData(newTree);
  };


  const filter = (e) => {
    const searchString = e.target.value;
    const tree = filterTree(searchString, treeData);
    setInitData(tree);
  };

  return (
    <div className="container">
      <h1>Mock Form</h1>
      <input onChange={filter} placeholder="Search..." className="common" />
      <CheckedTree initData={initData} toggleChecked={toggleChecked} />
      <button onClick={null} className="common">
        Submit
      </button>
    </div>
  );
};

export default Main;
