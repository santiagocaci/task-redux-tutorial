import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTask } from '../features/tasks/taskSlice';

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
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
        {tasks.map(({ id, title, description }) => (
          <div key={id} className='bg-neutral-700 p-4 rounded-md'>
            <header className='pb-2 flex justify-between items-center'>
              <h3>{title}</h3>
              <div className='flex items-center gap-2'>
                <button
                  className='bg-red-600 px-2 py-1 rounded-sm text-ms'
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </button>
                <Link
                  to={`/edit-task/${id}`}
                  className='bg-blue-400 px-2 py-1 rounded-sm text-ms'
                >
                  Edit
                </Link>
              </div>
            </header>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksList;
