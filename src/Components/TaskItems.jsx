import React from 'react'
import { TaskList } from './TaskList'

export const TaskItems = ({tasks, readTask}) => {
  return (
    <section className='d-flex flex-column gap-3 col-md-6'>
        <h3 className="text-light text-center m-0"> Tasks </h3>
        <ul className='list-group'>
            {
                tasks.length  ? (
                    tasks.map((task) => {
                        return <TaskList key={task.id} task={task} readTask={readTask}/>
                    } )
                ) : 
                    (
                        <li
                          className="d-flex justify-content-center list-group-item list-group-item-action p-3"
                          aria-current="true"
                        >
                          <h4 className="fw-bolder m-0">Don't Tasks</h4>
                        </li>
                )
            }
        </ul>
    </section>
  )
}
