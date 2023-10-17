import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="main_navcontainer">
                <div className="nav_container">
                    <div className="logo_list">
                        <img src="./img/galaticdragon.jpg" alt="" className='img_logo' />
                        <ul className='lists'>
                            <li>Home</li>
                            <li>Works</li>
                            <li>Contacts</li>
                        </ul>
                    </div>
                    <div className="nav_icons">
                        <i class="fa-brands fa-searchengin" ></i>
                        <button className='search_btn'>Click Here</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
