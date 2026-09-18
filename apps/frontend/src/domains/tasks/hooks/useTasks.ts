import { useState, useEffect } from 'react';
import { api } from '../../../api/axios';
import { Task, CreateTaskDto } from '../types/task.types';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchTasks = async () => {
    try {
      const response = await api.get<Task[]>('/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Грешка при земање на задачите:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (data: CreateTaskDto) => {
    try {
      await api.post('/tasks', data);
      await fetchTasks();
    } catch (error) {
      console.error('Грешка при додавање задача:', error);
    }
  };


  const updateTask = async (id: number, data: CreateTaskDto) => {
    try {
      await api.put(`/tasks/${id}`, data);
      await fetchTasks();
    } catch (error) {
      console.error('Грешка при ажурирање на задачата:', error);
    }
  };

  const deleteTask = async (id: number) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      console.error('Грешка при бришење задача:', error);
    }
  };

  
  return { tasks, loading, addTask, updateTask, deleteTask };
}