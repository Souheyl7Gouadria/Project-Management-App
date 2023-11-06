import React from 'react'
import Button from './Button'
const Sidebar = ({onStartAddProject , projects, slectedProjectId,onSelectProject}) => {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
        <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>your Projects</h2>
        <div>
            <Button onClick= {onStartAddProject}> + Add Project</Button>
        </div>
        <ul className='mt-8'>
          {/* list of projects */}
          {projects.map((pr)=> {
            let classes = 'w-full text-left px-2 py-1 rounded-sm my-1  hover:bg-stone-800';
            if(pr.id === slectedProjectId) {
              classes+=' bg-stone-800 text-stone-200'
            }else{
              classes+=' text-stone-400'
            }
            return (
              <li key={pr.id}>
                <button onClick={() => {onSelectProject(pr.id)}} 
                className={classes}>
                  {pr.title}
                  </button>
              </li>
            )
          }
          )}
        </ul>
    </aside>
  )
}

export default Sidebar