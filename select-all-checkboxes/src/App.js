import { useState } from 'react';
import './style.css'

export default function App() {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'Dogs', checked: false },
    { id: 2, label: 'Cats', checked: false },
    { id: 3, label: 'Cows', checked: false },
    { id: 4, label: 'Deers', checked: false },
  ]);
  
  const handleCheck = (idx) => {
    checkboxes[idx].checked = !checkboxes[idx].checked
    setCheckboxes([...checkboxes])
    }
  
  const handleCheckAll = () => {
    const newList = checkboxes.map(box => ({...box, checked: !box.checked}))
    setCheckboxes([...newList])
  }

  return (
    <div>
      <div>
      {checkboxes.map((checkbox, index) => (
        <div key={checkbox.id}>
          <input
            data-testid={`checkbox-${index + 1}`}
            type="checkbox"
            checked={checkbox.checked}
            onChange={() => handleCheck(index)}
          />
          {checkbox.label}
        </div>
      ))}
      </div>
      <button onClick={() => handleCheckAll()}>Select All</button>
    </div>
  )
}