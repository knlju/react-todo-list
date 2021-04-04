import React, {useState} from 'react';
import {AiFillCloseCircle, AiFillEdit, BiCheck, IoIosDoneAll, MdWork, TiCancel} from "react-icons/all";

function Todo({todo, removeTodo, updateTodo}) {

  const [edit, setEdit] = useState(false)
  const [done, setDone] = useState(false)
  const [inputText, setInputText] = useState("")

  const toggleEdit = () => {
    setInputText(todo.text)
    setEdit(!edit)
  }

  const toggleDone = () => setDone(!done)

  const onUpdateTodo = () => {
    updateTodo(key, inputText)
    toggleEdit()
  }

  const {key, text} = todo

  const displayedText = done ? <span style={{textDecoration: "line-through"}}>{text}</span> : text

  const firstButtonProps = { title: (edit ? "apply changes" : "delete todo") }

  return (
    <div className='todo' key={key}>
      {!edit && <button className="toggle-done" title="toggle done" onClick={() => toggleDone()}>
        {done ? <MdWork/> : <IoIosDoneAll/>}
      </button>}
      <div className='todo-text'>
        {edit ? <textarea rows={2} value={inputText} onChange={e => setInputText(e.target.value)}/> : (displayedText)}
      </div>
      <div className='todo-options'>
        <button title="toggle edit" onClick={() => toggleEdit()}>
          {edit ? <TiCancel/> : <AiFillEdit/>}
        </button>
        <button {...firstButtonProps} onClick={edit ? () => onUpdateTodo() : () => removeTodo(key)}>
          {edit ? <BiCheck /> : <AiFillCloseCircle/>}
        </button>
      </div>
    </div>
  );
}

export default Todo;