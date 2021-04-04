import React, {useState} from 'react';
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {

  const [todos, setTodos] = useState([])

  const removeTodo = key => setTodos(todos.filter(todo => todo.key !== key))
  const addTodo = text => setTodos([...todos, {key: new Date().getTime(), text}])
  const updateTodo = (key, newText) => setTodos(todos.map(todo => todo.key === key ? {key, text: newText} : todo))

  return (
    <div className="container">
      <h1>TODO App</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default App;
