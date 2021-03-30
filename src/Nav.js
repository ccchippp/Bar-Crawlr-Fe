import React from 'react'

let Nav = () => {
    return (
        <div>
            <nav className="navbar">
                {/* <div className='prof-pic-container'> */}
                    <img className='prof-pic'></img>
                    {/* </div> */}
                {/* <div className="navbar-brand-container"> */}
                    <h4 className="navbar-brand">Bar Crawlr</h4>
                    {/* </div> */}
                    <div class='center-form'>
                        <form id="bar-search" action="submit" method="GET"> 
                            <input type="text" name="text" class="search" placeholder="Start a Crawl!" />
                            <input type="submit" name="submit" class="submit" value="Search" />
                        </form>
                    </div>
                {/* <div class="logout-container"> */}
                    <button class="logout">Logout</button>
                    {/* </div> */}
        </nav>
        </div>
        
    )
}
export default Nav