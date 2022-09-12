import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import Todo from "./models/Todo";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
});

const App: React.FC = () => {
  const classes = useStyles();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [nextID, setNextID] = useState(1);

  useEffect(() => {
    if (todos && todos.length > 0) {
      setNextID(Math.max(...todos.map((el) => el.id)) + 1);
    }
  }, [todos]);

  return (
    <div className={classes.container}>
      <CreateTodo todos={todos} setTodos={setTodos} id={nextID} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
