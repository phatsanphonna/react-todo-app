import React, { useState } from 'react';
import DisplayTodo from './components/DisplayTodo.component';
import './App.css';

function App() {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState<string[]>([])

  const addTodo = () => {
    setTodoList([...todoList, todo])
    setTodo('')
  }

  const removeTodo = (index: number) => {
    const todos = [...todoList]
    todos.splice(index, 1)
    setTodoList(todos)
  }

  return (
    <div className="App">
      <h1>React Todo App</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        addTodo();
      }}>
        <input onChange={e => setTodo(e.target.value)} value={todo} /> <button type='submit'>Add</button>
      </form>
      <div>
        {todoList.map((todo, index) => {
          return (
            <DisplayTodo key={index} todo={todo} index={index} removeTodo={removeTodo} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
