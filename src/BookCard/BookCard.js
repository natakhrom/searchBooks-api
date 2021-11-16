import React from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css'

function BookCard({ book, handleClick }) {
    
    function onClick() {
        handleClick(book);
    }

    return(
        <Link to="/about-book">
            <div className="book__container" onClick={onClick} >
                <img src={book.link} alt={book.alt} className="book__image" />
                <p className="book__category">{book.category}</p>
                <h2 className="book__title">{book.title}</h2>
                <p className="book__author">{book.authors}</p>
            </div>
        </Link>
    )
}

export default BookCard;