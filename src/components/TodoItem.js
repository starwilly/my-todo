/** @jsxImportSource @emotion/react */
import { BsCheck, BsX } from "react-icons/bs";

export default function TodoItem({ content, status, onClick, onRemove }) {
  return (
    <div
      css={{
        borderBottom: "1px solid #ccc",
        display: "flex",
        "&:hover > button": {
          opacity: 1,
        },
      }}
    >
      <label
        css={{
          display: "flex",
          flexBasis: 1,
          flexGrow: 1,
          alignItems: "center",
        }}
      >
        <input
          css={{ display: "none" }}
          type="checkbox"
          checked={status !== "active"}
          onChange={onClick}
        />
        <div
          css={{
            border: "1px solid #ccc",
            width: "1.5em",
            height: "1.5em",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          {status === "done" ? <BsCheck /> : null}
        </div>
        <span css={{ padding: "0.5em" }}>{content}</span>
      </label>
      <button
        css={{
          width: "2em",
          background: "none",
          border: 0,
          opacity: 0,
        }}
        onClick={onRemove}
      >
        <BsX />
      </button>
    </div>
  );
}
