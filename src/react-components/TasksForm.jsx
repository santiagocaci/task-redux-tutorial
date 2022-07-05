import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { addTask, editTask } from '../features/tasks/taskSlice';

const TasksForm = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: paramsId } = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title || !task.description) return;
    if (paramsId) {
      dispatch(editTask(task));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuidv4(),
        })
      );
    }
    navigate('/');
  };

  useEffect(() => {
    if (paramsId) {
      setTask(tasks.find((task) => task.id === paramsId));
    }
    console.log('render');
  }, [paramsId]);

  return (
    <form onSubmit={handleSubmit} className='bg-zinc-700 max-w-sm p-4'>
      <label htmlFor='title' className='block text-sm font-bold mb-1'>
        Task:{' '}
      </label>
      <input
        placeholder='title'
        name='title'
        type='text'
        onChange={handleChange}
        value={task.title}
        className='w-full p-2 rounded-md bg-zinc-500 mb-3'
      />
      <label htmlFor='description' className='block text-sm font-bold mb-1'>
        Description:
      </label>
      <textarea
        placeholder='description'
        name='description'
        onChange={handleChange}
        value={task.description}
        className='w-full p-2 rounded-md bg-zinc-500 mb-2'
      />
      <button
        type='submit'
        className='bg-blue-400 px-2 py-1 rounded-sm text-ms'
      >
        Save
      </button>
    </form>
  );
};

export default TasksForm;
