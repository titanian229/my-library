import './style.scss';
import React from 'react';
import { Input, notification } from 'antd';
import API from '../../utils/api';

const { Search } = Input;

const processGoogleResponse = (res) => {
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
    const returnedBook = {
        title,
        author: authors.join(', '),
        publishedDate,
        description,
        pageCount,
        image,
        link: infoLink,
    };
    return returnedBook;
};

const displayNoneFound = () => {
    notification.open({
        message: 'No matches found',
        description: 'Sorry, nothing was returned from Google Books for that search',
    });
};

const SearchBox = (props) => {
    // addBookResults

    const runSearch = (searchString) => {
        API.getGoogleBook(searchString)
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
