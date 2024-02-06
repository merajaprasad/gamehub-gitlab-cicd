import React from 'react'
import './myLibrary.css'
const MyLibrary = ({games,reference}) => {
  return (
      <section className="library" id="library" ref={reference}>
          <h1>My Library</h1>
      </section>
  )
}

export default MyLibrary
