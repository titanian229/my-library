import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Layout } from 'antd';

import Search from './pages/Search';
import Saved from './pages/Saved';

import Navbar from './components/Navbar';
import Logo from './components/Logo'
import HeaderEl from './components/Header'

import AOS from 'aos';

import './styles/global.scss';

const NavbarWithRouter = withRouter(Navbar);
const { Header, Content, Footer } = Layout;
function App() {
    useEffect(() => {
        AOS.init();
    });

    return (
        <Router>
            <Layout>
                <Header>
                    <Logo />
                    <NavbarWithRouter />
                </Header>
                <HeaderEl />
                <Content style={{padding: "0 4vw"}}>
                    <Route exact path="/" component={Search} />
                    <Route exact path="/mylibrary" component={Saved} />
                </Content>
                <Footer>&copy; James Lee 2020</Footer>
            </Layout>
        </Router>
    );
}

export default App;
