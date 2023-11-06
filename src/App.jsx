import Sidebar from "./components/Sidebar"
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import ProjectDetails from "./components/ProjectDetails";
import { preprocessCSS } from "vite";
function App() {
  const [projectsState,setProjectsState] = useState({
    slectedProjectId:undefined,
    projects: [],
    tasks:[]
  });

  const handleAddTask = (text) => {
    setProjectsState(prevState=> {
      const tasktId = Math.random();
      const newTask ={
        text:text,
        projectId:prevState.slectedProjectId,
        id: tasktId
      }
      return {
        ...prevState,
        tasks : [newTask,...prevState.tasks]
      }
    })
  }

  const handleDeleteTask = (taskId) => {
    setProjectsState(prevState => {
      tasksAfterDeletion = prevState.tasks.filter((task) => task.id !== taskId);
      return {
        ...prevState,
        tasks:tasksAfterDeletion
      }
    })
  }


  // for selectedProjectId  |  undefined means we are not doing nothing , null means we are adding a project | other value , we selected a project
  function handleStartAddingProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        slectedProjectId : null,
      }
    })
  }

  // handle new projects
  const handleAddProject = (projectData) => {
    setProjectsState(prevState=> {
      const newProjectId = Math.random();
      const newProject ={
        ...projectData,
        id: newProjectId
      }
      return {
        ...prevState,
        slectedProjectId:undefined,
        projects : [...prevState.projects, newProject]
      }
    })
  }
  const handleCancel =() => {
      setProjectsState((prevState) => {
        return {
          ...prevState,
          slectedProjectId:undefined
        }
      } )
  }
  const handleSelectProject = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        slectedProjectId:id
      }
    } )
  }

  const handleDelete = () => {
    // setProjectsState((prevState) => {
    // prevState.projects.filter((id) => id !== projectId )
    // }) 
    setProjectsState((prevState) => {
      return {
        ...prevState,
        slectedProjectId:undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.slectedProjectId )
      }
    } )
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.slectedProjectId)


  // console.log(projectsState)
  let content = <ProjectDetails tasks={projectsState.tasks} project ={selectedProject} onDelete={handleDelete} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} />;
  if(projectsState.slectedProjectId === null) {
    content = <NewProject onAdd ={handleAddProject} onCancel={handleCancel}/>
  }else if(projectsState.slectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddingProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onSelectProject={handleSelectProject} projects={projectsState.projects} onStartAddProject={handleStartAddingProject}/>
      {content}
    </main>
  );
}

export default App;
