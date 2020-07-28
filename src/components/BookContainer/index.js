import React from 'react';
import Book from '../Book';
import './style.scss';


const BookContainer = (props) => {
    console.log(props.books)
    return (
        <div className="bookContainer">
            {props.books.map((bookData, ind) => (
                <Book key={ind} book={bookData} saved={props.saved} removeBook={props.removeBook}/>
            ))}
        </div>
    );
};

export default BookContainer;
