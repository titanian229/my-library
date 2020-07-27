import './style.scss';
import React from 'react';
import { Input } from 'antd';
import API from '../../utils/api';

const { Search } = Input;

const processGoogleResponse = (res) => {
    try {
        const {
            title,
            authors,
            publishedDate,
            description,
            pageCount,
            imageLinks: { thumbnail: image },
            infoLink,
        } = res.volumeInfo;

        return { title, author: authors.join(', '), publishedDate, description, pageCount, image, link: infoLink };
    } catch (err) {
        console.log(err);
    }
};

const SearchBox = (props) => {
    // addBookResults

    const runSearch = (searchString) => {
        console.log(searchString);
        API.getGoogleBook(searchString)
            .then((res) => res.data.items.map((book) => processGoogleResponse(book)))
            .then((res) => props.addBookResults(res)); //.then(res => console.log(res))
    };

    return (
        <div className="searchBox">
            <Search placeholder="search for a book" enterButton="Search" size="large" onSearch={runSearch} />
        </div>
    );
};

export default SearchBox;
