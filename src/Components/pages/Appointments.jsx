import React, { useState,useEffect } from 'react'
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

  const updateTask = (task) => {
    const updateTasks = tasks.map((element) => {
      return task.id === element.id ? task : element;
    });
    setTasks(updateTasks);
    setTask({});
    alert('Actualizado');
  };
  
  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          state: "finalizado",
        };
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("TasksData", JSON.stringify(updatedTasks));
  };
  

  const deleteTask = (id) => {
    setTasks(tasks.filter((e) => {
      return e.id !== id;
    }));
    setTask({});
    localStorage.setItem('TasksData', JSON.stringify(tasks.filter((e) => e.id !== id)));
  };
  

const submitTasksForm = (task) => {
  if (task.id === '') {
    createTask(task);
  } else {
    updateTask(task);
  }
};

useEffect(() => {
  localStorage.setItem('TasksData', JSON.stringify(tasks));
}, [tasks]);

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
            <TaskList readTask={readTask} tasks={tasks} deleteTask={deleteTask} completeTask={completeTask}/>
        </div>
    </section>
  )
}
