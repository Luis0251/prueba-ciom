import React, { useState } from 'react'

export const CustomForm = ({submitTasksForm, task}) => {
  
  const [formAppointment, setFormAppointment] = useState({
    name: '',
    id: Date.now(),
    description: '',
    state: '',
    category:''
  });

const { name,  description, state, category} = formAppointment;

 const handleSubmit = (e) =>{
    e.preventDefault()
    submitTasksForm(formAppointment)
    setFormAppointment({
      name: '',
      id: Date.now(),
      description: '',
      state: '',
      category:''
    })
  }
  const handleChange = (e)=> setFormAppointment({
    ...formAppointment, [e.target.name] : e.target.value
  });
  return (
    <section className='d-flex flex-column gap-3 col-md-4'>
        <h3 className='text-light text-center m-0'>📝Task📝</h3>
        <form className='text-dark rounded' 
        onSubmit={handleSubmit}
        >
        <div className="form-floating mb-3">
          <input
            type="text"
            name="name"
            placeholder="Enter the Task"
            className="form-control"
            value={name}
            //onChange={}
            onChange={handleChange}
            required
          />
          <label htmlFor="name" className="text-dark">Enter the task</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            name="category"
            placeholder="Category"
            className="form-control"
             value={category}
            
            onChange={handleChange}
            required
          />
          <label htmlFor="category" className="text-dark">Enter Category</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            name="description"
            placeholder="Enter the description task"
            className="form-control"
             value={description}
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
          <label htmlFor="state" className="text-dark">Enter State</label>
        </div>
        
        <button
          type="submit"
          className="btn btn-info w-100 fw-bold"
        >Crear</button>
        </form>
    </section>
  )
}
