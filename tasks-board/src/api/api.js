import { API_URL } from "../constants/constants";

export const fetchTasks = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Не вдалося отримати дані");

    return await response.json();
  } catch (error) {
    console.error("Помилка при отриманні завдань:", error);
    throw error;
  }
};

export const deleteTask = async (taskId) => {
  try {
    const response = await fetch(`${API_URL}/${taskId}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Не вдалося видалити завдання");

    return await response.json();
  } catch (error) {
    console.error("Помилка при видаленні завдання:", error);
    throw error;
  }
};
