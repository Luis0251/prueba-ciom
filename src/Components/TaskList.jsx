import React, { useState } from 'react';
import { TaskItem } from './TaskItem';

export const TaskList = ({ tasks, readTask, deleteTask, completeTask }) => {
  const [filterName, setFilterName] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterState, setFilterState] = useState('');

  const filteredTasks = tasks.filter((task) => {
    return (
      task.name.toLowerCase().includes(filterName.toLowerCase()) &&
      task.category.toLowerCase().includes(filterCategory.toLowerCase()) &&
      task.state.toLowerCase().includes(filterState.toLowerCase())
    );
  });
  return (
    <section className="d-flex flex-column gap-3 col-md-6">
      <h3 className="text-light text-center m-0"> 📰Tasks List📰 </h3>
      <div className="d-flex justify-content-between gap-3">
        <input
          type="text"
          className="form-control"
          placeholder="Filter by Name"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Filter by Category"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        />
        <select
          className="form-control"
          value={filterState}
          onChange={(e) => setFilterState(e.target.value)}
        >
          <option value="">All</option>
          <option value="todo">To Do</option>
          <option value="inprogress">In Progress</option>
          <option value="finalizado">Completed</option>
        </select>
      </div>
      <ul className="list-group">
        {filteredTasks.length ? (
          filteredTasks.map((task) => {
            return (
              <TaskItem
                completeTask={completeTask}
                key={task.id}
                task={task}
                readTask={readTask}
                deleteTask={deleteTask}
              />
            );
          })
        ) : (
          <li
            className="d-flex justify-content-center list-group-item list-group-item-action p-3"
            aria-current="true"
          >
            <h4 className="fw-bolder m-0">No Tasks</h4>
          </li>
        )}
      </ul>
    </section>
  );
};