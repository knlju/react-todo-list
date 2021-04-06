import React from 'react';
import Todo from "./Todo";

function TodoList({todos, removeTodo, updateTodo, toggleTodo}) {
  return (
    <div className="todo-list">
      { todos.map(todo => <Todo key={todo.key} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} toggleTodo={toggleTodo} />) }
    </div>
  );
}

export default TodoList;