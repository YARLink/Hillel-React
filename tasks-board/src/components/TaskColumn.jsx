import React from "react";
import TaskItem from "./TaskItem";
import "../styles/TaskBoard.scss";

const TaskColumn = ({ title, tasks, onStatusChange, onArchive }) => (
  <div className="task-column">
    <h2>
      {title}: {tasks.length}
    </h2>
    {tasks.length === 0 ? (
      <p>Немає завдань</p>
    ) : (
      tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onArchive={onArchive}
        />
      ))
    )}
  </div>
);

export default TaskColumn;
