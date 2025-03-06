import React, { useRef, useState } from "react";
import { createTask } from "../../api/api";
import { TASK_STATUSES, STATUS_TODO } from "../../constants/constants";
import styles from "./TodosForm.module.scss";

const TodosForm = ({ onTaskCreated }) => {
  const titleRef = useRef(null);
  const [status, setStatus] = useState(STATUS_TODO);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = titleRef.current.value.trim();
    if (!title) return;

    const newTask = { title, status };
    const createdTask = await createTask(newTask);
    onTaskCreated(createdTask);

    titleRef.current.value = "";
    setStatus(STATUS_TODO);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input ref={titleRef} type="text" placeholder="Task name" />
      <select
        value={status}
        onChange={(e) => setStatus(Number(e.target.value))}
      >
        {TASK_STATUSES.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodosForm;
