import React from 'react'
import './categories.css'

const Categories = ({games,reference}) => {
  return (
      <section className='categories' id='categories' ref={reference}>
          <h1 className="Categories">
              Categories
      </h1>
    </section>
  )
}

export default Categories
