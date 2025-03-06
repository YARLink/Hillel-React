import React from "react";
import Button from "../../../Button/Button";
import styles from "./TodosListItem.module.scss";

const TodosListItem = ({ task, buttons, onStatusChange, onArchive }) => (
  <div className={styles.taskItem}>
    <p>{task.title}</p>
    {buttons.map(({ title, nextStatus, action }) => (
      <Button
        key={title}
        title={title}
        onClick={() =>
          action === "delete"
            ? onArchive(task.id)
            : onStatusChange(task.id, nextStatus)
        }
      />
    ))}
  </div>
);

export default TodosListItem;
