import './App.css'
import data from './data'
import { useState } from 'react'



const Main = () => {
  const [formData, setFormData] = useState({ checkedTree: [] })

  const buildTree = (response) => {
    const tree = []

    for (let i = 0; i < response.length; i++) {
      const parent = {children: []}
      while (!parent.children.length){
        parent.id = response[i].id
        parent.name = response[i].name
        parent.children.push()
      }

  //     if (!response[i].parentId) {
  //       parent.id = response[i].id
  //       parent.name = response[i].name
  //       parent.children = []
  //       tree.push(parent)
  //     } 

    }

  // console.log(tree)
  //   for (let i= 0; i < response.length; i++) {
  //     // for (const {id} of tree) {
  //       const parent = tree.find((parent) => parent.id === response[i].parentId)
  //     // }
  //       if (parent) {
  //         parent.children.push(response[i])
  //       }
  //   }

  console.log(tree)
  }

  buildTree(data)

  const handleSubmit = () => {
    console.log(formData)
  }

  return (
    <div className='container'>
      <h1>Mock Form</h1>
      <input placeholder='Mock Input' className='common' />
      <input placeholder='Mock Input' className='common' />
      {/* <CheckedTree /> */}
      <button onClick={handleSubmit} className='common'>
        Submit
      </button>
    </div>
  )
}

export default Main
