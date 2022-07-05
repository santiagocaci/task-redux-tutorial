import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TasksForm from './react-components/TasksForm';
import TasksList from './react-components/TasksList';

function App() {
  return (
    <div className='bg-zinc-800 h-screen text-white'>
      <div className='flex items-center justify-center h-full'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TasksList />} />
            <Route path='/create-task' element={<TasksForm />} />
            <Route path='/edit-task/:id' element={<TasksForm />} />
            <Route path='/*' element={<Navigate to={'/'} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
