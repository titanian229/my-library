import './style.scss';
import React from 'react';
import  { Link } from 'react-router-dom'
import { Menu } from 'antd';

const Navbar = () => {
    return (
        <Menu theme="dark" mode="horizontal" style={{float: 'right'}}>
            <Menu.Item style={{ marginLeft: 'auto' }}><Link to="/">Find a book</Link></Menu.Item>
            <Menu.Item><Link to="mylibrary">Saved Books</Link></Menu.Item>
        </Menu>
    );
};

export default Navbar;
