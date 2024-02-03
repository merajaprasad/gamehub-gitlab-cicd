import React from 'react'

const NavListItems = ({item}) => {
  return (
    <>
          <li className="">
              <a href="" className="">
                  <i className={`bi ${item.icon}`}></i>
                  <span className='navName'>
                  {item.name}
                  </span>
              </a>
      </li>
    </>
  )
}

export default NavListItems
