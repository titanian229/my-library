import React from 'react';
import Book from '../Book';
import './style.scss';

const BookContainer = (props) => {
    return (
        <div className="bookContainer">
            {props.books.map((bookData) => (
                <Book book={bookData} saved={props.saved} />
            ))}
        </div>
    );
};

export default BookContainer;
