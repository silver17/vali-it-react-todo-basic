import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    borderBottom: "2px solid #FFFFFF",
    borderRadius: 10,
    width: "100%",
  },
});

const Separator: React.FC = () => {
  const classes = useStyles();

  return <div className={classes.container} />;
};

export default Separator;
