import React from 'react'
import { CustomForm } from './CustomForm'

export const Header = ({company}) => {
    const {name} = company
  return (
    <header className='py-3 text-center'>
        <div className='d-flex flex-column gap-1 container'>
            <h2 className='text-warning m-0'>{name}</h2>
            <main className="py-3">
        <CustomForm />
      </main>
        </div>
    </header>
  )
}
