import { Paper, Typography, Button, Box, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Task } from '../types/task.types';

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onEdit?: (task: Task) => void;
}

export function TaskItem({ task, onDelete }: TaskItemProps) {
  const navigate = useNavigate();

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'HIGH': return 'error';
      case 'MEDIUM': return 'warning';
      default: return 'success';
    }
  };

  return (
    <Paper elevation={2} sx={{ p: 2, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Typography variant="h6">{task.title}</Typography>
          <Chip label={task.priority} color={getPriorityColor(task.priority) as any} size="small" />
        </Box>
        <Typography variant="body2" color="text.secondary">{task.description}</Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button 
          variant="outlined" 
          color="primary" 
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit
        </Button>
        <Button variant="outlined" color="error" onClick={() => onDelete(task.id)}>
          Delete
        </Button>
      </Box>
    </Paper>
  );
}