import React from "react";
import { createUseStyles } from "react-jss";
import Todo from "../models/Todo";
import Separator from "./Separator";
import TodoCounter from "./TodoCounter";
import TodoListItem from "./TodoListItem";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    width: "35%",
  },
});

type TodoListProps = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Separator />
      {todos.length === 0 ? (
        <div>No todos yet...</div>
      ) : (
        <>
          <TodoCounter todos={todos} />
          <Separator />
        </>
      )}
      {todos
        .sort((el1, el2) => (el1.completed > el2.completed ? 1 : -1))
        .map((todo) => (
          <TodoListItem
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
          />
        ))}
    </div>
  );
};

export default TodoList;