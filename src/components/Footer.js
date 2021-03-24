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
      padding: ".2em .8em ",
      margin: "0 .1em",
      textDecoration: "none",
      lineHeight: 1.2,
      color: "#333",
      "&.active": {
        borderRadius: "4px",
        color: "#333",
        boxShadow:
          " rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;",
      },
    },
  ]);
  return (
    <div
      css={{
        position: "relative",
        padding: "1.2rem 1.6rem .8rem",
        color: "#aaa",
      }}
    >
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
              outline: "none",
              padding: "0 .5em",
              margin: "0",
              "&:hover": {
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
