import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Box, MenuItem } from '@mui/material';
import { FormInput } from '../../../form-fields/FormInput';
import { FormSelect } from '../../../form-fields/FormSelect';
import { CreateTaskDto, Task } from '../types/task.types';

interface TaskFormProps {
  onSave: (data: CreateTaskDto) => void;
  selectedTask: Task | null;
  onCancelEdit: () => void;
}

export function TaskForm({ onSave, selectedTask, onCancelEdit }: TaskFormProps) {
  const { control, handleSubmit, reset } = useForm<CreateTaskDto>({
    defaultValues: {
      title: '',
      description: '',
      priority: 'MEDIUM',
      completed: false,
    },
  });

  useEffect(() => {
    if (selectedTask) {
      reset({
        title: selectedTask.title,
        description: selectedTask.description,
        priority: selectedTask.priority,
        completed: selectedTask.completed,
      });
    } else {
      reset({ title: '', description: '', priority: 'MEDIUM', completed: false });
    }
  }, [selectedTask, reset]);

  const onSubmit = (data: CreateTaskDto) => {
    onSave(data);
    reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
      <FormInput name="title" control={control} label="Title is required" rules={{ required: 'Title is required' }} />
      <FormInput name="description" control={control} label="Description" multiline rows={2} />
      <FormSelect name="priority" control={control} label="Priority">
        <MenuItem value="LOW">Low</MenuItem>
        <MenuItem value="MEDIUM">Medium</MenuItem>
        <MenuItem value="HIGH">High</MenuItem>
      </FormSelect>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
          {selectedTask ? 'Edit' : 'Add'}
        </Button>
        {selectedTask && (
          <Button variant="outlined" color="secondary" size="large" onClick={onCancelEdit}>
           Cancel
          </Button>
        )}
      </Box>
    </Box>
  );
}