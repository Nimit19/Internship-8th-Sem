import React, { useContext } from 'react'
import TodoItems from './TodoItems';

import classes from './Todos.module.css';
import { TodoContext } from './store/todo-context';

const Todos: React.FC = () => {

  const todoCtx = useContext(TodoContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => {
        return <TodoItems onClickDeleteTodo={todoCtx.deleteTodo.bind(null, item.id)} key={item.id} text={item.text} />
      })}
    </ul>
  )
}

export default Todos;