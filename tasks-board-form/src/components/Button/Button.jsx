import React from "react";
import styles from "./Button.module.scss";

const Button = ({ title, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {title}
  </button>
);

export default Button;
