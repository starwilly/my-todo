/** @jsxImportSource @emotion/react */
import React from "react";
import TodoItem from "./TodoItem";
import { useState } from "react";

const noop = () => {};

export default function TodoList({
  todos,
  itemClick = noop,
  onRemove,
  onChange,
}) {
  const [editing, setEditing] = useState(null);
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #ccc",
        fontSize: "1.5rem",
      }}
    >
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          content={todo.content}
          status={todo.status}
          isEditing={editing === todo}
          onClick={() => itemClick(todo)}
          onRemove={() => onRemove(todo)}
          onEdit={() => setEditing(todo)}
          onChange={(content) => onChange(todo, content)}
          discardEdit={() => setEditing(null)}
        />
      ))}
    </div>
  );
}
