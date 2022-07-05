import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset, incrementByAmount } from './counterSlice';

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <section className='bg-slate-200 mx-auto my-auto'>
      <p className='text-7xl text-center pb-5'>{count}</p>
      <div className='text-center space-x-4'>
        <button
          className='bg-slate-500 px-4 py-2 text-5xl text-gray-300'
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className='bg-slate-500 px-4 py-2 text-5xl text-gray-300'
          onClick={() => dispatch(decrement())}
        >
          -
        </button>

        <input
          type='text'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(incrementByAmount(addValue));
          }}
        >
          Add Amount
        </button>
        <button onClick={resetAll}>Reset All</button>
      </div>
    </section>
  );
};

export default Counter;
