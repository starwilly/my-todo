/** @jsxImportSource @emotion/react */
import React from "react";
import TodoItem from "./TodoItem";

const emptyFilter = (item) => true;
const noop = () => {};

export default function FilterList({
  todos,
  filter = emptyFilter,
  itemClick = noop,
  onRemove,
}) {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #ccc",
        fontSize: "1.5rem",
      }}
    >
      {todos.filter(filter).map((todo) => (
        <TodoItem
          key={todo.id}
          content={todo.content}
          status={todo.status}
          onClick={() => itemClick(todo)}
          onRemove={() => onRemove(todo)}
        />
      ))}
    </div>
  );
}
