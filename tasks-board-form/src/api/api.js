import { API_URL } from "../constants/constants";

export const fetchTasks = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Не вдалося отримати дані");
    return await response.json();
  } catch (error) {
    console.error("Помилка отримання:", error);
    throw error;
  }
};

export const createTask = async (task) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    if (!response.ok) throw new Error("Не вдалося створити завдання");
    return await response.json();
  } catch (error) {
    console.error("Помилка створення:", error);
    throw error;
  }
};

export const updateTaskStatus = async (taskId, status) => {
  try {
    const response = await fetch(`${API_URL}/${taskId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (!response.ok) throw new Error("Не вдалося оновити статус");
    return await response.json();
  } catch (error) {
    console.error("Помилка оновлення:", error);
    throw error;
  }
};

export const deleteTask = async (taskId) => {
  try {
    const response = await fetch(`${API_URL}/${taskId}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Не вдалося видалити");
    return await response.json();
  } catch (error) {
    console.error("Помилка видалення:", error);
    throw error;
  }
};
