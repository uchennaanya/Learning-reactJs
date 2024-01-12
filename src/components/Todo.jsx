import { useState, useEffect, memo } from "react";
import { v4 as uuid } from "uuid";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((vals) => ({ ...vals, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("myTodos", JSON.stringify(todos));
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuid(), task: input.todoInput, desc: input.descInput },
    ]);
    setInput((prevInput) => ({ ...prevInput, todoInput: "", descInput: "" }));
  };

  useEffect(() => {
    const raw = localStorage.getItem("myTodos");
    const todosFromStorage = JSON.parse(raw);

    if (todosFromStorage) {
      setTodos(todosFromStorage);
    }
  }, []);

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((task) => task.id !== id);

    setTodos(updatedTodos);

    localStorage.setItem("myTodos", JSON.stringify(updatedTodos));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todoInput"
          value={input.todo}
          onChange={handleInput || ""}
          placeholder="Todo"
        />
        <br />
        <input
          type="text"
          name="descInput"
          value={input.desc}
          onChange={handleInput || ""}
          placeholder="Description"
        />
        <br />
        <input type="submit" value="Add+" />
      </form>

      {todos.length > 0 ? (
        todos.map((todo) => (
          <li key={todo.id}>
            <b>Task: {todo.task} - </b> Instruction : {todo.desc} {todo.i}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))
      ) : (
        <h2>Add task</h2>
      )}
    </>
  );
};
export default memo(Todo);
