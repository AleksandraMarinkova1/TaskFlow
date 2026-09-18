export interface Task {
  id: number;
  title: string;
  description: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  completed: boolean;
}

export interface CreateTaskDto {
  title: string;
  description: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  completed: boolean;
}