import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  horizontal: {
    borderBottom: "2px solid #FFFFFF",
  },
  vertical: {
    borderLeft: "2px solid #FFFFFF",
  },
});

type SeparatorProps = {
  vertical?: boolean;
};

const Separator: React.FC<SeparatorProps> = ({ vertical = false }) => {
  const classes = useStyles();

  return <div className={vertical ? classes.vertical : classes.horizontal} />;
};

export default Separator;
