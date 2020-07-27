import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import BookContainer from '../components/BookContainer';
import API from '../utils/api'

const { Title } = Typography;

const Saved = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        API.getBooks()
            .then(res => res.data)
            .then(booksList => setBooks(booksList))
    }, [])

    return (
        <div>
            <Title>Your saved books</Title>
            <BookContainer books={books} saved />
        </div>
    );
};

export default Saved;
