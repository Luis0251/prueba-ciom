import React, { useState } from 'react'
import { TaskList } from '../TaskList'
import { TaskItems } from '../TaskItems';

export const Appoitments = () => {
  let localStorageTasks = JSON.parse(localStorage.getItem('TasksData')) ?? [];
  const [task,setTask] = useState([]);
  const [tasks,setTasks] =useState(localStorageTasks);

  const createTask = (task) =>{
    task.id = Date.now()
    setTasks(() =>[...tasks, task]);
    alert('Creado')
  }

const submitTasksForm = (task) => {
    if (task.id === '') {
      createTask(task);
    } 
  };

  const readTask = (id) => {
    const task = tasks.find((element) => {
      return element.id === id;
    });
    setTask(task);
  };

  return (
    <section className='container'>
        <div className='row justify-content-between gap-4'>
            <TaskList submitTasksForm={submitTasksForm} task={task} />
            <TaskItems readTask={readTask} tasks={tasks}/>
        </div>
    </section>
  )
}
