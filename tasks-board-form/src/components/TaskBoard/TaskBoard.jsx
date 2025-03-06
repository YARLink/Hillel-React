import React, { useState, useEffect } from "react";
import { fetchTasks, updateTaskStatus, deleteTask } from "../../api/api";
import TodosLists from "../TodosLists/TodosLists";
import TodosForm from "../TodosForm/TodosForm";
import styles from "./TaskBoard.module.scss";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
      } catch (err) {
        setError(err.message);
      }
    };
    loadTasks();
  }, []);

  const handleStatusChange = async (taskId, newStatus) => {
    await updateTaskStatus(taskId, newStatus);
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleArchive = async (taskId) => {
    await deleteTask(taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className={styles.taskBoard}>
      <TodosForm onTaskCreated={(newTask) => setTasks([...tasks, newTask])} />
      {error && <p className="error">{error}</p>}
      <TodosLists
        tasks={tasks}
        onStatusChange={handleStatusChange}
        onArchive={handleArchive}
      />
    </div>
  );
};

export default TaskBoard;
