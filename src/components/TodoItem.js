import React from "react";

export default function TodoItem({ content, status, onClick, onRemove }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={status !== "active"}
          onChange={onClick}
        />
        {content}/ {status}
      </label>
      <button onClick={onRemove}>x</button>
    </div>
  );
}
