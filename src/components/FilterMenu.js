/** @jsxImportSource @emotion/react */
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const filters = [
  { key: "ALL", text: "All" },
  { key: "ACTIVE", text: "Active" },
  { key: "DONE", text: "Completed" },
];

export default function FilterMenu({
  filter,
  onFilterChange,
  activeItemCount,
  completeItemCount,
  onClearComplete,
}) {
  const Nav = styled(NavLink)([
    { padding: "5px", color: "green", "&.active": { color: "red" } },
  ]);
  return (
    <div>
      {activeItemCount} {activeItemCount === 1 ? "item" : "items"} left,
      {filters.map((f) => (
        <Nav key={f.key} to={f.text.toLowerCase()}>
          {f.text}
        </Nav>
      ))}
      {completeItemCount > 0 ? (
        <button onClick={onClearComplete}>Clear Complete</button>
      ) : null}
    </div>
  );
}
