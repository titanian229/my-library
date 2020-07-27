import './style.scss';
import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchBox = (props) => {
    return (
        <div className="searchBox">
            <Search
                placeholder="search for a book"
                enterButton="Search"
                size="large"
                onSearch={(value) => console.log(value)}
            />
        </div>
    );
};

export default SearchBox;
