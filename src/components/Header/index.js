import './style.scss';
import React from 'react';

const Header = () => {
    return (
        <div
            style={{
                backgroundImage: 'url(./caleb-woods-fulXJYIvRi8-unsplash.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                width: '100%',
                height: '35vh',
                marginBottom: "1em"
            }}
        ></div>
    );
};

export default Header;
