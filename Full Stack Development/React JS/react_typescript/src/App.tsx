import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodoContextProvider from "./components/store/todo-context";

function App() {
  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
