import React, { useContext, useRef } from 'react'

import classes from './NewTodo.module.css';
import { TodoContext } from './store/todo-context';

const NewTodo: React.FC = () => {

    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const todoCtx = useContext(TodoContext);


    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        if (enteredText.trim().length === 0) {
            return;
        }
        todoCtx.addTodo(enteredText);
    }


    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor='text'>Todo Text</label>
            <input ref={todoTextInputRef} type='text' id='text' placeholder='Enter Todo Text ...' />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo