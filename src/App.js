/** @jsxImportSource @emotion/react */
import { useState } from "react";
import "modern-css-reset";
import FilterList from "./components/FilterList";
import FilterMenu from "./components/FilterMenu";
import NewTodoForm from "./components/NewTodoForm";

const defaultTodos = [
  { id: 1, content: "test 1", status: "active" },
  { id: 2, content: "test 2", status: "active" },
  { id: 3, content: "test 3", status: "active" },
  { id: 4, content: "test 4", status: "active" },
];

const filterMap = {
  ALL: (todo) => todo,
  ACTIVE: (todo) => todo.status === "active",
  DONE: (todo) => todo.status === "done",
};

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [filter, setFilter] = useState("ACTIVE");
  const filterFn = filterMap[filter];
  const activeItemCount = todos.filter(filterMap["ACTIVE"]).length;
  const completeItemCount = todos.filter(filterMap["DONE"]).length;

  const toggleTodo = (todo) => {
    const newTodo = {
      ...todo,
      status: todo.status === "active" ? "done" : "active",
    };
    updateTodo(newTodo);
  };

  const removeTodo = (todo) => {
    const index = todos.findIndex((t) => t.id === todo.id);
    if (index === -1) {
      return;
    }
    const newTodos = todos.slice();
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const updateTodo = (todo) => {
    const index = todos.findIndex((t) => t.id === todo.id);
    const newTodos = todos.slice();
    newTodos[index] = todo;
    setTodos(newTodos);
  };

  const addTodo = (todo) => setTodos([...todos, todo]);

  const onClearComplete = () => {
    const newTodos = todos.filter((todo) => todo.status !== "done");
    setTodos(newTodos);
  };

  return (
    <div
      className="App"
      css={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #ccc",
        width: "40rem",
        margin: "0 auto",
      }}
    >
      <NewTodoForm onCreate={addTodo} />
      <FilterList
        todos={todos}
        itemClick={toggleTodo}
        onRemove={removeTodo}
        filter={filterFn}
      />
      <FilterMenu
        filter={filter}
        onFilterChange={setFilter}
        activeItemCount={activeItemCount}
        completeItemCount={completeItemCount}
        onClearComplete={onClearComplete}
      />
    </div>
  );
}

export default App;
