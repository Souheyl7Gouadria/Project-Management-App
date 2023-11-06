import React from 'react';
import NewTask from './NewTask';

const Tasks = ({ tasks, onDeleteTask, onAddTask }) => {
  return (
    <section>
      <h2 className='text-2xl font-bold text-stone-700 mb-4'>Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 && (
        <p className='text-stone-800 my-4'>This project does not have tasks at the moment</p>
      )}
      {tasks.length > 0 && (
        <ul className='p-4 mt-8 rounded-md bg-stone-400'>
          {tasks.map((task) => (
            <li key={task.id} className='flex justify-between my-2 p-4 rounded-md bg-stone-300 text-stone-600 text-xl font-bold tracking-wider'>
              <span>{task.text}</span>
              <button className='text-stone-400 hover:text-red-500 bg-white p-1.5 rounded-md hover:bg-red-300' onDeleteTask={() => onDeleteTask(task.id)}>Clear</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
