import React from "react";
import TodosListItem from "./TodosListItem/TodosListItem";
import styles from "./TodosList.module.scss";

const TodosList = ({ title, tasks, buttons, onStatusChange, onArchive }) => (
  <div className={styles.taskColumn}>
    <h2>
      {title}: {tasks.length}
    </h2>
    {tasks.length === 0 ? (
      <p>Немає завдань</p>
    ) : (
      tasks.map((task) => (
        <TodosListItem
          key={task.id}
          task={task}
          buttons={buttons}
          onStatusChange={onStatusChange}
          onArchive={onArchive}
        />
      ))
    )}
  </div>
);

export default TodosList;
