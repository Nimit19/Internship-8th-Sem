import React, { ReactNode, useState } from "react";
import Todo from "../../models/todo";

type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodoContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: (todoText: string) => {},
  deleteTodo: (id: string) => {},
});

const TodoContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  };

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export default TodoContextProvider;
