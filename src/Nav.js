import React from 'react'

let Nav = () => {
    return (
        <div>
            <nav className="navbar">
                <div className='prof-pic-container'>
                    <img className='prof-pic'></img></div>
                <div className="navbar-brand-container">
                    <h4 className="navbar-brand">Bar Crawlr</h4></div>
                <div class="logout-container">
                    <button class="logout">Logout</button></div>
        </nav>
  <nav class="container">
    <div class="1">
    <a href="#" class="navLinks">Home</a>
    </div>
    <div class="2">
    <a href="#" class="navLinks">About Me</a>
    </div>
    <div class="logo">
    </div>
    <div class="3">
    <a href="#" class="navLinks">Portfolio</a>
    </div>
    <div class="4">
    <a href="#" class="navLinks">Contact Me</a>
    </div>
  </nav>

        </div>
        
    )
}
export default Nav