import React from "react";

export default function NewTodoForm({ onCreate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = e.target.elements["newTodo"];
    const todo = {
      id: Date.now(),
      content: newTodo.value,
      status: "active",
    };
    newTodo.value = "";
    onCreate(todo);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="newTodo"
          type="text"
          placeholder="What need to be done?"
          autocomplete="off"
        />
      </form>
    </div>
  );
}
