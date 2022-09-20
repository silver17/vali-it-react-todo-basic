import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import fetchAvatar from "../helper/avatarHelper";
import Todo from "../models/Todo";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
  },
  btn: {
    backgroundColor: "#CDEDF6",
    "&:disabled": {
      color: "gray",
    },
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});

type CreateTodoProps = {
  setTodos: (todos: Todo[]) => void;
  todos: Todo[];
  id: number;
};

const CreateTodo: React.FC<CreateTodoProps> = ({ todos, setTodos, id }) => {
  const classes = useStyles();
  const [todoMessage, setTodoMessage] = useState<string>("");

  const addNewTodo = async (): Promise<void> => {
    const newTodo: Todo = {
      id: id,
      completed: false,
      message: todoMessage,
      avatar: await fetchAvatar(),
    };

    setTodos([...todos, newTodo]);
    setTodoMessage("");
  };

  const addOnEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addNewTodo();
    }
  };

  return (
    <div className={classes.container}>
      <span className={classes.title}>Add new Todo</span>
      <div className={classes.inputContainer}>
        <input
          type="text"
          placeholder="Add new todo..."
          value={todoMessage}
          onChange={(e) => setTodoMessage(e.target.value)}
          onKeyDown={(e) => addOnEnter(e)}
        />
        <button
          type="button"
          onClick={() => addNewTodo()}
          disabled={todoMessage && todoMessage.length > 0 ? false : true}
          className={classes.btn}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
