/** @jsxImportSource @emotion/react */
import { useState } from "react";
import "modern-css-reset";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import NewTodoForm from "./components/NewTodoForm";
import { Status } from "./constants";

const defaultTodos = [
  { id: 1, content: "test 1", status: Status.ACTIVE },
  { id: 2, content: "test 2", status: Status.ACTIVE },
  { id: 3, content: "test 3", status: Status.ACTIVE },
  { id: 4, content: "test 4", status: Status.ACTIVE },
];

const filterMap = {
  ALL: (todo) => todo,
  ACTIVE: (todo) => todo.status === Status.ACTIVE,
  COMPLETED: (todo) => todo.status === Status.COMPLETED,
};

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const activeItemCount = todos.filter(filterMap["ACTIVE"]).length;
  const completeItemCount = todos.filter(filterMap["COMPLETED"]).length;

  const toggleTodo = (todo) => {
    const newTodo = {
      ...todo,
      status: todo.status === Status.ACTIVE ? Status.COMPLETED : Status.ACTIVE,
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
    const newTodos = todos.map((t) => (t.id === todo.id ? todo : t));
    setTodos(newTodos);
  };

  const addTodo = (content) =>
    setTodos([
      ...todos,
      {
        content,
        id: Date(),
        status: Status.ACTIVE,
      },
    ]);

  const handleChange = (todo, content) => {
    const newTodo = { ...todo, content };
    updateTodo(newTodo);
  };

  const onClearComplete = () => {
    const newTodos = todos.filter(filterMap.ACTIVE);
    setTodos(newTodos);
  };

  return (
    <div
      className="App"
      css={{
        display: "flex",
        flexDirection: "column",
        width: "40rem",
        margin: "6em auto",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow:
          " rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
      }}
    >
      <h1 css={{ textAlign: "center", padding: ".5em 0" }}>Todo List</h1>
      <Router>
        <NewTodoForm onCreate={addTodo} />
        <Switch>
          <Route
            path={["/all", "/active", "/completed"]}
            render={({ match }) => {
              const filterKey = match.url.slice(1).toUpperCase();
              const filter = filterMap[filterKey];
              return (
                <TodoList
                  todos={todos.filter(filter)}
                  itemClick={toggleTodo}
                  onRemove={removeTodo}
                  onChange={handleChange}
                />
              );
            }}
          ></Route>
          <Redirect path="*" to="/all"></Redirect>
        </Switch>
        <Footer
          activeItemCount={activeItemCount}
          completeItemCount={completeItemCount}
          onClearComplete={onClearComplete}
        />
      </Router>
    </div>
  );
}

export default App;
