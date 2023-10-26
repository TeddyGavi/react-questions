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

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="container">
      <h1>Mock Form</h1>
      <input placeholder="Mock Input" className="common" />
      <input placeholder="Mock Input" className="common" />
      <CheckedTree initData={initData} />
      <button onClick={handleSubmit} className="common">
        Submit
      </button>
    </div>
  );
};

export default Main;
