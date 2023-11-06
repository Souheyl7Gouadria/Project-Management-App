import React from 'react'
import Button from './Button'
import { useState } from 'react'
const NewTask = ({onAddTask}) => {
    const [enteredTask,setEnteredTask] = useState('');

    const handleChange = (e) => {
        setEnteredTask(e.target.value)
    }

    const forwordTask =() => {
        onAddTask(enteredTask);
        setEnteredTask('');
    }

   return (
    <div className='flex items-center gap-4 '>
        <input value={enteredTask} onChange={handleChange} type='text' className='w-64 px-2 py-1 rounded-sm bg-stone-200'/>
        <Button onClick = {forwordTask}> Add Task</Button>
    </div>
  )
}

export default NewTask