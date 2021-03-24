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

  const RemoveButton = (
    <button
      className="remove-btn"
      css={{
        width: "2em",
        height: "2em",
        background: "none",
        border: 0,
        opacity: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#ff7277",
        outline: 0,
      }}
      onClick={onRemove}
    >
      <BsX size={"1.2em"} />
    </button>
  );

  const checkBoxColor = "#4c9aff";

  const Todo = (
    <div
      css={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        "&:hover .remove-btn": { opacity: 1 },
      }}
    >
      <button
        css={{
          width: "1.2em",
          height: "1.2em",
          background: "none",
          border: `1px solid ${checkBoxColor}`,
          borderRadius: "50%",
          margin: ".4em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: checkBoxColor,
          outlineStyle: "none",
        }}
        onClick={onClick}
      >
        {isCompleted ? <BsCheck size="1em" /> : null}
      </button>
      <div
        onDoubleClick={onEdit}
        css={[
          {
            padding: ".5em",
            flexBasis: 1,
            flexGrow: 1,
            flexShrink: 1,
            borderBottom: "1px solid #eee",
          },
          isCompleted && {
            textDecoration: "line-through",
            color: "#aaa",
            wordBreak: "break-all",
          },
        ]}
      >
        {content}
      </div>
      {RemoveButton}
    </div>
  );

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
      const content = newContent.trim();
      if (content === "") {
        onRemove();
      } else {
        onChange(content);
      }
    } else if (e.code === "Escape") {
      discardEdit();
    }
  };
  const EditTodo = (
    <input
      css={{
        flexGrow: 1,
        flexShrink: 1,
        padding: ".5em ",
        margin: 0,
        marginLeft: "2em",
        marginRight: "2em",
        border: "0",
        // backgroundColor: "#f3f3f3",
        outlineStyle: "none",
        borderBottom: `1px solid ${checkBoxColor}`,
      }}
      type="text"
      value={newContent}
      onChange={(e) => {
        console.log(`e`, e);
        setNewContent(e.target.value);
      }}
      onBlur={dismiss}
      onKeyUp={handleKeyUp}
      ref={newTodoRef}
    />
  );
  return (
    <div css={{ display: "flex", width: "100%", padding: "0 1rem" }}>
      {isEditing ? EditTodo : Todo}
    </div>
  );
}
