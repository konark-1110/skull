import React from 'react';
import {Link,withRouter} from 'react-router-dom';

import '../App.css';


const Navbar = (props) => {

    return(
        <nav className='nav-wrapper purple darken-4'>
            <Link to='/' className='brand-logo left'>Heaven</Link>
            <ul className='right'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/genretile'>Genre</Link></li>
                <li><Link to='/artist'>Artist</Link></li>
                <li><Link to='/charts'>Charts</Link></li>
                <li><Link to='/login' className='brand-logo right'>Login</Link></li>
            </ul>

        </nav>
    )
}
export default withRouter (Navbar);
