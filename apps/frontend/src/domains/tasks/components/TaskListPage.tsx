import { useState } from 'react';
import { Container, Typography, CircularProgress, Box } from '@mui/material';
import { useTasks } from '../hooks/useTasks';
import { TaskForm } from '../components/TaskForm';
import { TaskItem } from '../components/TaskItem';
import { Task, CreateTaskDto } from '../types/task.types';

export default function TaskListPage() {
  const { tasks, loading, addTask, updateTask, deleteTask } = useTasks();
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleSave = (data: CreateTaskDto) => {
    if (selectedTask) {
      updateTask(selectedTask.id, data);
      setSelectedTask(null);
    } else {
      addTask(data);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        TaskFlow
      </Typography>
      
      <TaskForm 
        onSave={handleSave} 
        selectedTask={selectedTask} 
        onCancelEdit={() => setSelectedTask(null)} 
      />

      <Typography variant="h5" gutterBottom>
        Tasks:
      </Typography>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : tasks.length === 0 ? (
        <Typography color="text.secondary">No tasks entered.</Typography>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={deleteTask} onEdit={(t) => setSelectedTask(t)} />
        ))
      )}
    </Container>
  );
}