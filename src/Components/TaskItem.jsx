import React from "react";

export const TaskItem = ({ task, readTask, deleteTask }) => {
  const { name, id, description, state, category } = task;
  const handleDelete = () => {
    deleteTask(id);
  };
  return (
    <li
      className="d-flex flex-column gap-2 list-group-item list-group-item-action p-3 animate__animated animate__fadeInUp"
      aria-current="true"
    >
      <div className="d-flex align-items-center justify-content-between">
        <h5 className="m-0">
          <span className="fw-bolder">Task:</span> {name}
        </h5>
      </div>

      <p className="m-0">
        <span className="fw-bolder">description:</span> {description}
      </p>
      <div className="d-flex align-items-center justify-content-between">
        <h5 className="m-0">
          <span className="fw-bolder">category:</span> {category}
        </h5>
      </div>

      <div className="d-flex align-items-center justify-content-between">
        <h6 className="m-0">
          <span className="fw-bolder">State:</span> {state}
        </h6>
        <div className="d-flex gap-1">
          <button className="btn btn-primary btn-sm">
            <i className="bi bi-check-circle"></i>
          </button>

          <button
            type="button"
            className="btn btn-warning btn-sm"
            onClick={handleDelete}
          >
            <i className="bi bi-pencil-square"></i>
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={handleDelete}
          >
            <i className="bi bi-x-circle"></i>
          </button>
        </div>
      </div>
    </li>
  );
};
