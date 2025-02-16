import React from "react";
import { TODO, IN_PROGRESS, DONE } from "../constants/constants";
import "../styles/TaskBoard.scss";

const TaskItem = ({ task, onStatusChange, onArchive }) => {
  return (
    <div className="task-item">
      <p>{task.title}</p>

      {task.status === TODO && (
        <button
          className="task-button"
          onClick={() => onStatusChange(task.id, IN_PROGRESS)}
        >
          In Progress
        </button>
      )}

      {task.status === IN_PROGRESS && (
        <>
          <button
            className="task-button"
            onClick={() => onStatusChange(task.id, TODO)}
          >
            To Do
          </button>
          <button
            className="task-button"
            onClick={() => onStatusChange(task.id, DONE)}
          >
            Done
          </button>
        </>
      )}

      {task.status === DONE && (
        <button className="archive-button" onClick={() => onArchive(task.id)}>
          To Archive
        </button>
      )}
    </div>
  );
};

export default TaskItem;
