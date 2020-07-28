import './style.scss';
import React from 'react';
import { Input, notification } from 'antd';
import API from '../../utils/api';
import processGoogleResponse from '../../utils/sanitizeResults'

const { Search } = Input;

const displayNoneFound = () => {
    notification.open({
        message: 'No matches found',
        description: 'Sorry, nothing was returned from Google Books for that search',
    });
};

const SearchBox = (props) => {
    // addBookResults

    const runSearch = (searchString) => {
        props.addSearchQuery(searchString)
        API.getGoogleBookPage(searchString, 0, 10)
            .then((res) => {
                if (res.data.totalItems > 0) {
                    console.log('yes', res)
                    props.addTotalAPIResults(Number(res.data.totalItems))
                    return res.data.items.map((book) => processGoogleResponse(book));
                } else {
                    console.log('no', res)
                    displayNoneFound();
                    return []
                }
            })
            .then((res) => {
                props.addBookResults(res);
            }); //.then(res => console.log(res))
    };

    return (
        <div className="searchBox">
            <Search placeholder="search for a book" enterButton="Search" size="large" onSearch={runSearch} />
        </div>
    );
};

export default SearchBox;
