import React from "react";
import TodosList from "./TodosList/TodosList";
import { COLUMNS } from "../../constants/constants";
import styles from "./TodosLists.module.scss";

const TodosLists = ({ tasks, onStatusChange, onArchive }) => (
  <div className={styles.taskColumns}>
    {COLUMNS.map(({ title, status, buttons }) => (
      <TodosList
        key={status}
        title={title}
        tasks={tasks.filter((t) => t.status === status)}
        buttons={buttons}
        onStatusChange={onStatusChange}
        onArchive={onArchive}
      />
    ))}
  </div>
);

export default TodosLists;
