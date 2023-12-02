import React from 'react'

function Nav() {
    return (
        <>
            <nav>
                <div className='logo'>
                    <img src="public/Nike.jpg" alt="" />
                </div>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                </ul>
                <button className='btn'>Login</button>
            </nav>
        </>
    )
}

export default Nav
