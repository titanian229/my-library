import React, { useState } from 'react';
import { Typography } from 'antd';
import BookContainer from '../components/BookContainer';
import SearchBox from '../components/SearchBox';
import PageButtons from '../components/PageButtons';
import API from '../utils/api';
import processGoogleResponse from '../utils/sanitizeResults';

const { Title } = Typography;

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [bookResults, setBooksResults] = useState([]);
    const [totalAPIresults, setTotalAPIresults] = useState(0);
    const [currentBookPage, setCurrentBookPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const addBookResults = (results) => {
        setBooksResults(results);
    };

    const addTotalAPIResults = (number) => {
        if (number > 100) number = 100
        setTotalAPIresults(number);
    };

    const movePage = (pageNumber, newPageSize) => {
        if (newPageSize !== pageSize) setPageSize(newPageSize);
        setCurrentBookPage(pageNumber);
        callNewSearch(searchQuery, (pageNumber - 1) * pageSize, pageSize);
    };

    const addSearchQuery = (searchString) => {
        setSearchQuery(searchString);
    };

    const callNewSearch = (searchQuery, startInd, maxResults) => {
        console.log(searchQuery, startInd, maxResults)
        API.getGoogleBookPage(searchQuery, startInd, maxResults)
            .then((res) => {
                if (res.data.totalItems > 0) {
                    addTotalAPIResults(Number(res.data.totalItems));
                    return res.data.items.map((book) => processGoogleResponse(book));
                } else {
                    console.log("this shouldn't have gone wrong");
                    return [];
                }
            })
            .then((res) => {
                console.log(res)
                addBookResults(res);
            });
    };

    return (
        <div>
            <Title>Search for a book</Title>
            <SearchBox
                addBookResults={addBookResults}
                addTotalAPIResults={addTotalAPIResults}
                addSearchQuery={addSearchQuery}
            />
            <BookContainer books={bookResults} />
            {totalAPIresults > 10 ? (
                <PageButtons movePage={movePage} totalItems={totalAPIresults} curPage={currentBookPage} />
            ) : (
                ''
            )}
        </div>
    );
};

export default Search;
