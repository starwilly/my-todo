/** @jsxImportSource @emotion/react */
import { useState, useRef, useEffect } from "react";
import { BsCheck, BsX } from "react-icons/bs";
import { Status } from "../constants";

export default function TodoItem({
  content,
  status,
  isEditing,
  onClick,
  onRemove,
  onChange,
  onEdit,
  discardEdit,
}) {
  const [newContent, setNewContent] = useState(content);
  const newTodoRef = useRef(null);
  const isCompleted = status === Status.COMPLETED;
  const dismiss = () => {
    setNewContent(content);
    discardEdit();
  };

  useEffect(() => {
    if (isEditing) {
      const size = newTodoRef.current.value.length;
      newTodoRef.current.focus();
      newTodoRef.current.setSelectionRange(size, size);
    }
  }, [isEditing]);

  const handleKeyUp = (e) => {
    if (e.code === "Enter") {
      onChange(newContent);
    } else if (e.code === "Escape") {
      discardEdit();
    }
  };
  return (
    <div
      css={{
        display: "flex",
        "&:hover > button": {
          opacity: 1,
        },
      }}
    >
      <div
        css={{
          width: "1.5em",
          height: "1.5em",
        }}
      >
        {isEditing ? null : (
          <button css={{ width: "100%", height: "100%" }} onClick={onClick}>
            {isCompleted ? <BsCheck /> : null}
          </button>
        )}
      </div>
      <div css={{ flexBasis: 1, flexGrow: 1 }} onDoubleClick={() => onEdit()}>
        {isEditing ? (
          <input
            css={{ width: "100%" }}
            type="text"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            onBlur={dismiss}
            onKeyUp={handleKeyUp}
            ref={newTodoRef}
          />
        ) : (
          <span
            css={[
              { padding: "0.5em" },
              isCompleted && { textDecoration: "line-through", color: "#aaa" },
            ]}
          >
            {content}
          </span>
        )}
      </div>
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
