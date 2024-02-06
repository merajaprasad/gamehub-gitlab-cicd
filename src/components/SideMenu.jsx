import React, { useState } from 'react'
import './sideMenu.css'
import NavListItems from './NavListItems'
import navListData from '../data/navListData'



const SideMenu = ({active,sectionActive}) => {
    const [navData, setNavData] = useState(navListData);
    const handleNavOnClick = (id,target) => { 
        console.log(id);
        const newNavData = navData.map(nav => {
            nav.active = false;
            if (nav._id === id) nav.active = true;
            return nav
        });
        setNavData(newNavData);
        sectionActive(target)
    }
  return (
    <div className={`sideMenu ${active ? 'active':undefined}`}>
          <a href="" className="logo">
              <i className="bi bi-controller"></i>
              <span className="brand">Play</span>
          </a>
          <ul className="nav">
              {navData.map(item =>
                  <NavListItems key={item._id} item={item} navOnClick={handleNavOnClick } />
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
