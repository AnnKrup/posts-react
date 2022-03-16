import React from 'react';
import { Link } from 'react-router-dom'
import MyButton from '../buttons/MyButton';
import { useContext } from 'react';
import {AuthContext} from '../../contex';

const MyNavbar = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    function logOut() {
      setIsAuth(false);
      localStorage.removeItem('auth');
    };

    return (
        <div className='navbar'>
             <div className='navbar__links-wrapper'>
                <Link to='/about' className='navbar__link'>About</Link>
                <Link to='/' className='navbar__link'>Posts</Link>
            </div>
            <MyButton onClick={() => logOut()}>Exit</MyButton>
        </div>
    );

};

export default MyNavbar;
