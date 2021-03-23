/** @jsxImportSource @emotion/react */
import React from "react";

const filters = [
  { key: "ALL", text: "All" },
  { key: "ACTIVE", text: "Active" },
  { key: "DONE", text: "Complete" },
];

export default function FilterMenu({
  filter,
  onFilterChange,
  activeItemCount,
  completeItemCount,
  onClearComplete,
}) {
  return (
    <div>
      {activeItemCount} {activeItemCount === 1 ? "item" : "items"} left,
      {filters.map((f) => (
        <a
          css={[
            { padding: "5px", color: "green" },
            f.key === filter && {
              color: "red",
            },
          ]}
          key={f.key}
          onClick={() => onFilterChange(f.key)}
        >
          {f.text}
        </a>
      ))}
      {completeItemCount > 0 ? (
        <button onClick={onClearComplete}>Clear Complete</button>
      ) : null}
    </div>
  );
}
