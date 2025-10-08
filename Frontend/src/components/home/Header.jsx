import React from 'react'
import "../../css/Home.css"
import Search from './Search'
import Filter from './Filter'
const Header = () => {
  return (
    <>
    <nav className = 'header row sticky-top'>
        <img src = '/Assets/logo.png' alt ='logo'  className='logo'/>
        <div className = 'search_filter'>
            <Search/>
            <Filter/>
            {/* <FilterModal/> */}
        </div>

        {/* <div className = 'dropdown'> */}
            <span className = 'material-symbols-outlined web_logo'>
                account_circle
            </span>
        {/* </div> */}

        <div className = 'dropdown'>
            <span className = 'material-sumbols-outlined web_log dropdown-toggle' role='button' id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                <img src='/Assets/avatar.png' className = 'user-img rounded-circle w-25 h-25' alt='icon'/>

            </span>


            <ul className = 'dropdown-menu' aroa-labelledby='dropdownMenuLink' >
                <li>
                    <a className = 'dropdown-item' href='/profile'> My Account</a>

                </li>
                <li>
                    <button className = 'dropdown-item'> Logout </button>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Header
