import classnames from "classnames";
import React from "react";
import { createUseStyles } from "react-jss";
import Todo from "../models/Todo";

const useStyles = createUseStyles({
  todo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    border: "2px solid transparent",
    borderRadius: 10,
    backgroundColor: "#074446",
    width: "100%",
    "&:hover": {
      border: "2px solid #5EB1BF",
    },
  },
  unfinished: {
    backgroundColor: "#EF7B45",
  },
  todoSection: {
    padding: [10, 10],
  },
  deleteBtn: {
    color: "#D84727",
    fontWeight: 700,
    border: "1px solid #D84727",
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
    padding: [5, 10],
    width: 35,
    height: 35,
    marginRight: 5,
  },
});

type TodoListItemProps = {
  todo: Todo;
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
};

const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  todos,
  setTodos,
}) => {
  const classes = useStyles();

  const completeTodo = (todo: Todo): void => {
    const updatedTodos: Todo[] = todos.map((el) => {
      if (el.id === todo.id) {
        todo.completed = !todo.completed;
      }
      return el;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (e: React.MouseEvent, id: number): void => {
    e.stopPropagation();
    const updatesTodos: Todo[] = todos.filter((el) => el.id !== id);
    setTodos(updatesTodos);
  };

  return (
    <div
      className={classnames([
        classes.todo,
        !todo.completed && classes.unfinished,
      ])}
      onClick={() => completeTodo(todo)}
      key={todo.id}
    >
      <div className={classes.todoSection}>{todo.message}</div>
      <button
        onClick={(e) => deleteTodo(e, todo.id)}
        className={classnames([classes.deleteBtn, classes.todoSection])}
      >
        X
      </button>
    </div>
  );
};

export default TodoListItem;
