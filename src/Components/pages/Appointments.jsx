import React, { useState } from 'react'
import { TaskList } from '../TaskList';
import { CustomForm } from '../CustomForm'

export const Appoitments = () => {
  let localStorageTasks = JSON.parse(localStorage.getItem('TasksData')) ?? [];
  const [task,setTask] = useState({});
  const [tasks,setTasks] =useState(localStorageTasks);

  const createTask = (task) =>{
    task.id = Date.now()
    setTasks([...tasks, task]);
    localStorage.setItem('TasksData', JSON.stringify([...tasks, task]))
    alert('Creado')
  }
  
  const deleteTask = (id) => {
    setTasks(tasks.filter((e) => {
      return e.id !== id;
    }));
    setTask({});
  };

const submitTasksForm = (task) => {
    createTask(task);
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
            <CustomForm submitTasksForm={submitTasksForm} task={task} />
            <TaskList readTask={readTask} tasks={tasks} deleteTask={deleteTask}/>
        </div>
    </section>
  )
}
