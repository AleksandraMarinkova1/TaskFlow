import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskListPage from './domains/tasks/components/TaskListPage';
import TaskEditPage from './domains/tasks/pages/TaskEditPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskListPage />} />
        <Route path="/edit/:id" element={<TaskEditPage />} />
      </Routes>
    </BrowserRouter>
  );
}