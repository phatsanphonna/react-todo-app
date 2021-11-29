import React from 'react'

interface Props {
  todo: string;
  index: number;
  removeTodo: Function;
  [key: string]: any;
}

const DisplayTodo = ({ todo, index, removeTodo }: Props) => {
  return (
    <div>
      <p>{todo} <button onClick={() => removeTodo(index)}>X</button></p>
    </div>
  )
}

export default DisplayTodo
