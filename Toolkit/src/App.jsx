import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Todo-App</h1>
      <AddTodo></AddTodo>
      <Todos></Todos>
    </>
  );
}

export default App;
