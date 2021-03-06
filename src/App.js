import React, {useState, useEffect} from 'react';
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  const removeTodo = key => setTodos(todos.filter(todo => todo.key !== key))
  const addTodo = text => setTodos([...todos, {key: new Date().getTime(), text, done: false}])
  const updateTodo = (key, newText) => setTodos(todos.map(todo => todo.key === key ? {...todo, text: newText} : todo))
  const toggleTodo = key => setTodos(todos.map(todo => todo.key === key ? {...todo, done: !todo.done} : todo))

  return (
    <div className="container">
      <h1>TODO App</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
