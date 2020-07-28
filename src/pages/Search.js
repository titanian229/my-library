import React, { useState } from 'react';
import { Typography } from 'antd';
import BookContainer from '../components/BookContainer';
import SearchBox from '../components/SearchBox';
import PageButtons from '../components/PageButtons';

const { Title } = Typography;

const Search = () => {
    const [bookResults, setBooksResults] = useState([]);
    const [totalAPIresults, setTotalAPIresults] = useState(0);
    const [currentBookPage, setCurrentBookPage] = useState(1);

    const addBookResults = (results) => {
        setBooksResults(results);
    };

    const addTotalAPIResults = (number) => {
        setTotalAPIresults(number);
    };

    const movePage = (pageNumber) => {
        setCurrentBookPage(pageNumber);
    };

    return (
        <div>
            <Title>Search for a book</Title>
            <SearchBox addBookResults={addBookResults} addTotalAPIResults={addTotalAPIResults} />
            <BookContainer books={bookResults.slice((currentBookPage - 1) * 10, currentBookPage * 10)} />
            {totalAPIresults > 10 ? (
                <PageButtons movePage={movePage} totalItems={bookResults.length} curPage={currentBookPage} />
            ) : (
                ''
            )}
        </div>
    );
};

export default Search;
