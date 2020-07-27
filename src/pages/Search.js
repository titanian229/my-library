import React, { useState } from 'react';
import { Typography } from 'antd';
import BookContainer from '../components/BookContainer';
import SearchBox from '../components/SearchBox';

const { Title } = Typography;

const Search = () => {
    const [bookResults, setBooksResults] = useState([]);

    const addBookResults = (results) => {
        setBooksResults(results)
    }

    return (
        <div>
            <Title>Search for a book</Title>
            <SearchBox addBookResults={addBookResults} />
            <BookContainer books={bookResults} />
        </div>
    );
};

export default Search;
