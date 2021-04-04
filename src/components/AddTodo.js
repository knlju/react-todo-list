import React, {useState} from 'react';

function AddTodo({addTodo}) {

  const [inputText, setInputText] = useState("")

  return (
    <div className="add-todo-form">
      <input type="text" placeholder="New todo..." value={inputText} onChange={e => {setInputText(e.target.value)}} />
      <button onClick={() => {addTodo(inputText);setInputText("");}}>Add!</button>
    </div>
  );
}

export default AddTodo;