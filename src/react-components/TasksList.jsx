import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TaskItem from './TaskItem';

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className='w-4/6'>
      <header className='flex justify-between items-center p-4'>
        <h1 className='text-xl font-medium'>Tasks: {tasks.length}</h1>
        <Link
          to={'/create-task'}
          className='bg-green-600 px-2 py-1 rounded-sm text-sm hover:text-white hover:bg-indigo-700'
        >
          Create Task
        </Link>
      </header>

      <div className='grid grid-cols-3 gap-4'>
        {tasks.map(({ id, description, title }) => (
          <TaskItem key={id} id={id} description={description} title={title} />
        ))}
      </div>
    </div>
  );
};

export default TasksList;
