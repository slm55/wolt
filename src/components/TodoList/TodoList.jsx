import { ConstructionOutlined, Description } from "@mui/icons-material";
import Todo from "./Todo";
import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos") || []));
  const [doneTasks, setDoneTasks] = useState(0);

  const addTodo = () => {
    const newItem = new TodoItem(Date.now(), newTodo, false);
    setTodos([...todos, newItem]);
    setNewTodo("");
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id != id));
  };

  const save = (id, newTodo) => {
    setTodos(
      todos.map((t) =>
        t.id == id ? new TodoItem(t.id, newTodo, t.completed) : t
      )
    );
  };

  const complete = (id, completed) => {
    setTodos(
      todos.map((t) => (t.id == id ? { ...t, completed: completed } : t))
    );
  };

  useEffect(() => {
    setDoneTasks(todos.filter((t) => t.completed).length);
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1>Todo List</h1>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <h4>
        {doneTasks} / {todos.length} done{" "}
      </h4>

      {todos.length > 0 ? (
        <ul>
          {todos.map((todo, id) => (
            <Todo
              key={id}
              todo={todo}
              remove={removeTodo}
              save={save}
              complete={complete}
            />
            //props
          ))}
        </ul>
      ) : (
        <h3>No tasks</h3>
      )}
    </div>
  );
}

export default TodoList;
