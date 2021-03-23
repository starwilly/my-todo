/** @jsxImportSource @emotion/react */

export default function TodoItem({ content, status, onClick, onRemove }) {
  return (
    <div
      css={{
        lineHeight: 1.5,
        borderBottom: "1px solid #ccc",
        display: "flex",
        "&:hover > button": {
          opacity: 1,
        },
      }}
    >
      <label
        css={{
          display: "block",
          flexBasis: 1,
          flexGrow: 1,
        }}
      >
        <input
          type="checkbox"
          checked={status !== "active"}
          onChange={onClick}
        />
        {content}
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
        x
      </button>
    </div>
  );
}
