import { useEffect, useState } from "react";
import "./style.css";
// API - https://api.agify.io/?name=<name>
const baseURL = `https://api.agify.io`;

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0)

  async function getName(name) {
    const res = await fetch(`${baseURL}/?name=${name}`);
    const results = await res.json();
    setAge(results.age)
    setName("")
  }

  useEffect(() => {
    getName(name);
  }, []);

  function handleSubmit(e) {
    e.preventDefault()
    getName(name)
    return null;
  }

  return (
    <main>
      <div className="container">
        <form onSubmit={handleSubmit} className="inputs">
          <label htmlFor="name">Please Enter a Name to find you age</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
          />
          <button type="submit">Submit</button>
        </form>
        {age && <div className="age-display">{age}</div>}
      </div>
    </main>
  );
}
