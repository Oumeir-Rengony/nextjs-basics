import React from "react";
import Link from "next/link";

import classes from "./button.module.css";

const Button = ({ link, clickHandler, children }) => {
  return link ? (
    <Link href={link}>
      <a className={classes.btn}>{children}</a>
    </Link>
  ) : (
    <button classes={classes.btn} onClick={clickHandler}>{children}</button>
  );
};

export default Button;
