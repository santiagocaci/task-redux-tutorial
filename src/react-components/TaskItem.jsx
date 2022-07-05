import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteTask } from '../features/tasks/taskSlice';

const TaskItem = ({ id, title, description }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <div className='bg-neutral-700 p-4 rounded-md'>
      <header className='pb-2 flex justify-between items-center'>
        <h3 className='text-lg font-semibold'>{title}</h3>
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
  );
};

export default TaskItem;

TaskItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};
