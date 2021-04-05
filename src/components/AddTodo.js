import React, {useState} from 'react';

function AddTodo({addTodo}) {

  const [inputText, setInputText] = useState("")

  const addNewTodo = () => {
    if (inputText.trim()) addTodo(inputText)
    else return
    setInputText("")
  }

  return (
    <div className="add-todo-form">
      <input type="text" placeholder="New todo..." value={inputText} onChange={e => {setInputText(e.target.value)}} />
      <button onClick={addNewTodo}>Add!</button>
    </div>
  );
}

export default AddTodo;