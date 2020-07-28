import React, { useState } from 'react';
import { Typography } from 'antd';
import BookContainer from '../components/BookContainer';
import SearchBox from '../components/SearchBox';
import PageButtons from '../components/PageButtons';

const { Title } = Typography;

const Search = () => {
    const [bookResults, setBooksResults] = useState([]);
    const [totalAPIresults, setTotalAPIresults] = useState(0);

    const addBookResults = (results) => {
        setBooksResults(results);
    };

    return (
        <div>
            <Title>Search for a book</Title>
            <SearchBox addBookResults={addBookResults} />
            <BookContainer books={bookResults} />
            {totalAPIresults > 10 ? <PageButtons /> : ''}
        </div>
    );
};

export default Search;
