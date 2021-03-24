/** @jsxImportSource @emotion/react */

export default function NewTodoForm({ onCreate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const todoElement = e.target.elements["newTodo"];
    onCreate(todoElement.value.trim());
    todoElement.value = "";
  };
  return (
    <form css={{ padding: ".5rem 2rem" }} onSubmit={handleSubmit}>
      <input
        css={{
          width: "100%",
          fontSize: "1.5rem",
          outlineStyle: "none",
          padding: ".2em 1em ",
          backgroundColor: "hsla(225, 50%, 96%)",
          borderRadius: "8px",
          border: "2px solid transparent",
          "&::placholder": {
            color: "red",
          },
          color: "hsl(225, 40%, 20%)",
          "&:focus": {
            borderColor: "hsla(225, 80%, 40%, .1)",
          },
        }}
        name="newTodo"
        type="text"
        placeholder="What need to be done?"
        autoComplete="off"
      />
    </form>
  );
}
