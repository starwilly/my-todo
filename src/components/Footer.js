/** @jsxImportSource @emotion/react */
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export default function Footer({
  activeItemCount,
  completeItemCount,
  onClearComplete,
}) {
  const Nav = styled(NavLink)([
    {
      padding: ".2em .5em ",
      margin: "0 .2em",
      color: "green",
      lineHeight: 1.2,
      "&.active": {
        color: "red",
        border: "1px solid #ccc",
        borderRadius: "4px",
      },
    },
  ]);
  return (
    <div css={{ position: "relative", padding: ".2rem 1rem" }}>
      <span css={{ float: "left" }}>
        {activeItemCount} {activeItemCount === 1 ? "item" : "items"} left
      </span>
      <div
        css={{
          position: "absolute",
          left: "0",
          right: "0",
          textAlign: "center",
        }}
      >
        <Nav to="/all">All</Nav>
        <Nav to="/active">Active</Nav>
        <Nav to="/completed">Completed</Nav>
      </div>
      <span css={{ float: "right", position: "relative" }}>
        {completeItemCount > 0 ? (
          <button
            css={{
              border: 0,
              background: 0,
              "&:hover": {
                color: "red",
                textDecoration: "underline",
              },
            }}
            onClick={onClearComplete}
          >
            Clear Complete
          </button>
        ) : null}
      </span>
    </div>
  );
}
