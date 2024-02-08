import React, { useContext } from 'react'
import './header.css';
import userImg from '../images/user.jpeg'
import { AppContext } from '../App';


const Header = ({ toggleActive }) => {
    const {library,bag} = useContext(AppContext)
  return (
    <header>
          <a href="#" className="menu" onClick={toggleActive}>
              <i className="bi bi-sliders"></i>
          </a>
          <div className="userItems">
              <a href="#" className="icon"><i className="bi bi-heart-fill"></i>
                  <span className="like">{library.length }</span>
              </a>
              <a href="#" className="icon"><i className="bi bi-bag-fill"></i>
                  <span className="bag">{bag.length }</span>
              </a>
              <div className="avatar">
                  <a href="#" className="">
                      <img src={userImg} alt="User-image" className="User Image" />
                  </a>
                  <div className="user">
                      <span className="">Sanuja K</span>
                      <a href="#" className="">View Profile</a>
                  </div>
              </div>
          </div>
    </header>
  )
}

export default Header
