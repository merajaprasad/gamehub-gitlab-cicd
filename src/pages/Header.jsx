import React from 'react'
import './header.css';
import userImg from '../images/user.jpeg'


const Header = () => {
  return (
    <header>
          <a href="" className="menu">
              <i className="bi bi-sliders"></i>
          </a>
          <div className="userItems">
              <a href="#" className="icon"><i className="bi bi-heart-fill"></i>
                  <span className="like">0</span>
              </a>
              <a href="#" className="icon"><i className="bi bi-bag-fill"></i>
              <span className="bag">0</span>
              </a>
              <div className="avatar">
                  <a href="#" className="">
                      <img src={userImg} alt="User-image" className="User Image" />
                  </a>
                  <div className="user">
                      <span className="">User Name</span>
                      <a href="#" className="">View Profile</a>
                  </div>
              </div>
          </div>
    </header>
  )
}

export default Header
