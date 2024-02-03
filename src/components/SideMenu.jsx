import React, { useState } from 'react'
import './sideMenu.css'
import NavListItems from './NavListItems'
import navListData from '../data/navListData'



const SideMenu = () => {
    const [navData, setNavData] = useState(navListData);
  return (
    <div className='sideMenu'>
          <a href="" className="logo">
              <i className="bi bi-controller"></i>
              <span className="brand">Play</span>
          </a>
          <ul className="nav">
              {navData.map(item =>
                  <NavListItems key={item._id} item={item} />
                )}
          </ul>
          <ul className="social">
              {/* {navData.map(item =>
                  <NavListItems key={item._id} item={item} />
                )} */}
              <li className="">
                  <a href="" className="">
                       <i className="bi bi-meta"></i>
                  </a>
              </li>
              <li className="">
                  <a href="" className="">
                       <i className="bi bi-twitter-x"></i>
                  </a>
              </li>
              <li className="">
                  <a href="" className="share">
                       <i className="bi bi-share"></i>
                  </a>
              </li>
          </ul>
    </div>
  )
}

export default SideMenu
