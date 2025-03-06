export const STATUS_TODO = 0;
export const STATUS_IN_PROGRESS = 1;
export const STATUS_DONE = 2;
export const STATUS_ON_HOLD = 4;

export const API_URL = "https://679286cdcf994cc6804a5368.mockapi.io/tasks";

export const TASK_STATUSES = [
  { value: STATUS_TODO, label: "To Do" },
  { value: STATUS_IN_PROGRESS, label: "In Progress" },
  { value: STATUS_DONE, label: "Done" },
];

export const COLUMNS = [
  {
    title: "To Do",
    status: STATUS_TODO,
    buttons: [{ title: "In Progress", nextStatus: STATUS_IN_PROGRESS }],
  },
  {
    title: "On Hold",
    status: STATUS_ON_HOLD,
    buttons: [
      { title: "To Do", nextStatus: STATUS_TODO },
      { title: "In Progress", nextStatus: STATUS_IN_PROGRESS },
    ],
  },
  {
    title: "In Progress",
    status: STATUS_IN_PROGRESS,
    buttons: [
      { title: "To Do", nextStatus: STATUS_TODO },
      { title: "Done", nextStatus: STATUS_DONE },
      { title: "On Hold", nextStatus: STATUS_ON_HOLD },
    ],
  },
  {
    title: "Done",
    status: STATUS_DONE,
    buttons: [{ title: "To Archive", action: "delete" }],
  },
];
