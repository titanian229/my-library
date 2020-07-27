import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import BookContainer from '../components/BookContainer';
import API from '../utils/api'

const { Title } = Typography;

const Saved = () => {

    const [books, setBooks] = useState([])

    const removeBook = (bookToDelete) => {
        console.log('removing books called yay', bookToDelete)
        API.deleteBook(bookToDelete._id)
        setBooks(books.filter(book => book._id !== bookToDelete._id))
    }


    useEffect(() => {
        API.getBooks()
            .then(res => res.data)
            .then(booksList => setBooks(booksList))
    }, [])

    return (
        <div>
            <Title>Your saved books</Title>
            <BookContainer removeBook={removeBook} books={books} saved />
        </div>
    );
};

export default Saved;
