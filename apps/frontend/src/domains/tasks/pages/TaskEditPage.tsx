import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress, Box, Button, MenuItem } from '@mui/material';
import { useForm } from 'react-hook-form';
import { FormInput } from '../../../form-fields/FormInput';
import { FormSelect } from '../../../form-fields/FormSelect';
import { CreateTaskDto, Task } from '../types/task.types';
import { api } from '../../../api/axios';

export default function TaskEditPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);

  const { control, handleSubmit, reset } = useForm<CreateTaskDto>({
    defaultValues: {
      title: '',
      description: '',
      priority: 'MEDIUM',
      completed: false,
    },
  });


  useEffect(() => {
    api.get<Task>(`/tasks/${id}`)
      .then((res) => {
        reset({
          title: res.data.title,
          description: res.data.description,
          priority: res.data.priority,
          completed: res.data.completed,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error('Грешка при вчитување на задачата:', err);
        setLoading(false);
      });
  }, [id, reset]);

  const onSubmit = async (data: CreateTaskDto) => {
    try {
      await api.put(`/tasks/${id}`, data);
      navigate('/');
    } catch (error) {
      console.error('Грешка при ажурирање:', error);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Edit Task
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
        <FormInput name="title" control={control} label="Title is required" rules={{ required: 'Title is required' }} />
        <FormInput name="description" control={control} label="Description" multiline rows={3} />
        
        <FormSelect name="priority" control={control} label="Priority">
          <MenuItem value="LOW">Low</MenuItem>
          <MenuItem value="MEDIUM">Medium</MenuItem>
          <MenuItem value="HIGH">High</MenuItem>
        </FormSelect>

        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Button type="submit" variant="contained" color="primary" fullWidth size="large">
            Save
          </Button>
          <Button variant="outlined" color="secondary" fullWidth size="large" onClick={() => navigate('/')}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Container>
  );
}