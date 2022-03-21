import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
    const style = {
        color: 'white'
    }
    
    return (
        <nav>
            <h3>LOGO</h3>
            <ul className='nav-links'>
                <Link style={style} to='/'>
                    <li> Home </li>
                </Link>
                <Link style={style} to='/FortniteCreateApi'>
                    <li> Fortnite CreateApi call </li>
                </Link>
                <Link style={style} to='/FortniteAsyncThunk'>
                    <li> Fortnite Async Thunk call </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav