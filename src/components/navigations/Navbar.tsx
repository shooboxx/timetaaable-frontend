import React from 'react';
import timetaaablelogo from './../../assets/images/timetaaablelogo.svg';
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {

    return (
        <div className='row nav-container'> 
            <Link to='/'>
                <img className='logo' src={timetaaablelogo} alt="logo" /> 
            </Link>
        
        </div>

    )
};
export { Navbar };