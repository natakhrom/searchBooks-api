import React from 'react';
import './BooksList.css';
import BookCard from '../BookCard/BookCard';

function BooksList({ books, totalItems, onClick, handleClick, isBookList, sortByDate }) {
    const [sortedBooks, setSortedBooks] = React.useState([]);


    // Сортировка книг по дате;
    React.useEffect(() => {
        function sort() {
            if (!sortByDate) {
                setSortedBooks(books);
            } else {
                let booksToSort = [...books];
                booksToSort.sort((book1, book2) => {
                    return book2.publishedDate.localeCompare(book1.publishedDate);
                });
                setSortedBooks(booksToSort);
            }
        }

        sort();

    }, [books, sortByDate])

    return(
        <section className="booksList">
            <p className="booksList__text">Found {totalItems} results</p>
            <div className="booksList__grid">
                {sortedBooks.map(book => 
                <BookCard key={book.id} id={book.id} book={book} handleClick={handleClick}  />
                )}
            </div>
            <button type="button" className={isBookList ? 'booksList__buttonLoadMore' : 'booksList__buttonLoadMore_hidden'} onClick={onClick}>Load More</button>
        </section>
    )
}

export default BooksList;