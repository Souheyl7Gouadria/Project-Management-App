import React, { useRef } from 'react'
import Input from './Input'
import Modal from './Modal';


const NewProject = ({onAdd,onCancel}) => {
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const handleSave = () => {
        const enteredTitle = title.current.value;
        const enteredDueDate = dueDate.current.value;
        const enteredDescription = description.current.value;
        // validation
        if(enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate.trim() === "" ){
            modal.current.open();
            return;
        }


        onAdd({
            title:enteredTitle,
            description:enteredDescription,
            dueDate:enteredDueDate
        });

    }

  return (
    <>
    <Modal ref={modal} buttonCaption='okay'>
        <h2 className='text-xl font-bold text-stone-700 my-4'>invalid input , please try again</h2>
        <p className='text-stone-600 mb-4'>all fields must be non empty</p>

    </Modal>
    <div className='w-[35rem] mt-16' >
        <menu className='flex items-center justify-end gap-4 my-4'>
            <li><button className=' px-4 py-2 rounded-md text-stone-800 hover:text-stone-950 hover:bg-stone-300' onClick={onCancel}>Cancel</button></li>
            <li><button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950' onClick={handleSave}>Save</button></li>
        </menu>
        <div>
            <Input type='text' ref={title} label="Title" />
            <Input ref={description} label="Description" isTextArea='true' />
            <Input type='date' ref={dueDate} label="Due Date"/>
        </div>
    </div></>
    
  )
}

export default NewProject