import React from "react";
import { createUseStyles } from "react-jss";
import Separator from "../components/Separator";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 30,
  },
  todos: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});

const AdminPage: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.title}>Admin page</div>
      <Separator />
      <div className={classes.todos}>
        <div>Completed todos</div>
        <Separator vertical />
        <div>Unfished todos</div>
      </div>
    </div>
  );
};

export default AdminPage;
