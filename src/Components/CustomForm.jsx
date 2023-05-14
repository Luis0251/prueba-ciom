import React, { useState } from 'react'

export const CustomForm = () => {
  const [formAppointment, setFormAppointment] = useState({
    task: '',
    id: Date.now(),
    description: '',
    state: '',
    category:''
  });
const { task,  description, state, category} = formAppointment;
 const handleSubmit = (e) =>{
    e.preventDefault()
    setFormAppointment({
      task: '',
      id: Date.now(),
      description: '',
      state: '',
      category:''
    })
  }
  return (
    <section className='d-flex flex-column gap-3 col-md-4'>
        <h3 className='text-light text-center m-0'>Crear Cita</h3>
        <form className='text-dark rounded' 
        onSubmit={handleSubmit}
        >
        <div className="form-floating mb-3">
          <input
            type="text"
            name="task"
            placeholder="Enter the Task"
            className="form-control"
            value={task}
            //onChange={}
            required
          />
          <label htmlFor="task" className="text-dark">Enter the task</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            name="category"
            placeholder="Category"
            className="form-control"
             value={category}
            //onChange={}
            required
          />
          <label htmlFor="propietario" className="text-dark">Enter Category</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            name="description"
            placeholder="Enter the description task"
            className="form-control"
             value={description}
            //onChange={}
            required
          />
          <label htmlFor="description" className="text-dark">Enter the description task</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            name="state"
            placeholder="state"
            className="form-control"
             value={state}
            //onChange={}
            required
          />
          <label htmlFor="propietario" className="text-dark">Enter State</label>
        </div>
        
        <button
          type="submit"
          className="btn btn-info w-100 fw-bold"
        >SUBMIT</button>
        </form>
    </section>
  )
}
