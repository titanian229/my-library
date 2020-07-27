import './style.scss';
import React from 'react';
import { Input } from 'antd';
import API from '../../utils/api';

const { Search } = Input;

const processGoogleResponse = (res) => {
    console.log('processing response', res)
    const {
        title = '',
        authors = ['n/a'],
        publishedDate = '',
        description = '',
        pageCount = '',
        infoLink = '',
    } = res.volumeInfo;

    let image;

    if (res.volumeInfo.imageLinks) {
        image =
            res.volumeInfo.imageLinks.thumbnail ||
            'https://www.archgard.com/assets/upload_fallbacks/image_not_found-54bf2d65c203b1e48fea1951497d4f689907afe3037d02a02dcde5775746765c.png';
    } else {
        image =
            'https://www.archgard.com/assets/upload_fallbacks/image_not_found-54bf2d65c203b1e48fea1951497d4f689907afe3037d02a02dcde5775746765c.png';
    }
    const returnedBook = { title, author: authors.join(', '), publishedDate, description, pageCount, image, link: infoLink }
    console.log('retBook', returnedBook)
    return returnedBook;
};

const SearchBox = (props) => {
    // addBookResults

    const runSearch = (searchString) => {
        console.log(searchString);
        API.getGoogleBook(searchString)
            .then((res) => {
                console.log(res.data)
                return res.data.items.map((book) => processGoogleResponse(book))
            })
            .then((res) => props.addBookResults(res)); //.then(res => console.log(res))
    };

    return (
        <div className="searchBox">
            <Search placeholder="search for a book" enterButton="Search" size="large" onSearch={runSearch} />
        </div>
    );
};

export default SearchBox;
