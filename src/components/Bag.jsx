import React from 'react'
import './bag.css'

const Bag = ({games,reference}) => {
  return (
    <section className='bag' id='bag' ref={reference}>
          <h1 className="Bag">
              bag
      </h1>
    </section>
  )
}

export default Bag
