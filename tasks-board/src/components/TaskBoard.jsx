import React, { useState, useEffect } from "react";
import "../styles/TaskBoard.scss";
import { TODO, IN_PROGRESS, DONE } from "../constants/constants";
import { fetchTasks, deleteTask } from "../api/api";
import TaskColumn from "./TaskColumn";

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

  const handleStatusChange = (taskId, newStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleArchive = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="task-board">
      <h1>Task Manager</h1>

      {error && <p className="error">{error}</p>}

      <div className="task-columns">
        <TaskColumn
          title="To Do"
          tasks={tasks.filter((t) => t.status === TODO)}
          onStatusChange={handleStatusChange}
        />
        <TaskColumn
          title="In Progress"
          tasks={tasks.filter((t) => t.status === IN_PROGRESS)}
          onStatusChange={handleStatusChange}
        />
        <TaskColumn
          title="Done"
          tasks={tasks.filter((t) => t.status === DONE)}
          onStatusChange={handleStatusChange}
          onArchive={handleArchive}
        />
      </div>
    </div>
  );
};

export default TaskBoard;
