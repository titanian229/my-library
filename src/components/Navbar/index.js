import './style.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const Navbar = (props) => {

    console.log(props)

    return (
        <Menu theme="dark" mode="horizontal" style={{ float: 'right' }} defaultSelectedKeys={[(props.location.pathname === '/' ? '1' : '2')]}>
            <Menu.Item key="1" style={{ marginLeft: 'auto' }}>
                <Link to="/">Find a book</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="mylibrary">Saved Books</Link>
            </Menu.Item>
        </Menu>
    );
};

export default Navbar;
