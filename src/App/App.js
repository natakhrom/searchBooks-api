import React from 'react';
import './App.css';
import Header from '../Headers/Header';
import api from '../utils/BooksApi';
import BooksList from '../BooksList/BooksList';
import Spinner from '../Spinner/Spinner';
import noCover from '../images/noCover.jpg'
import AboutBook from '../AboutBook/AboutBook';
import { Route, Switch } from 'react-router';


function App() {
  const [books, setBooks] = React.useState([]);
  const [totalItems, setTotalItems] = React.useState(0);
  const [category, setCategory] = React.useState('all');
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedBook, setSelectedBook] = React.useState({});
  const [startIndex, setStartIndex] = React.useState(0);
  const [query, setQuery] = React.useState('');
  const [isBookList, setIsBookList] = React.useState(false);
  const [sortByDate, setSortByDate] = React.useState(false);
  //количество загружаемых книг за шаг пагинации;
  const maxResult = 5;

  // фенкция загрузки книг с Google Books APIs
  function getBooks(query, category, startIndex, maxResult, addToExisting)
  {
    api.getBooks(query, category, startIndex, maxResult)
      .then((data) => {
      setTotalItems(data.totalItems);
      const newBooks = data.items.map(item => ({
        id: item.id,
        link: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.smallThumbnail : noCover,
        alt: `Картинка к книге "${item.volumeInfo.title}"`,
        title: item.volumeInfo.title, 
        category: item.volumeInfo.categories, 
        authors: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : '',
        description: item.volumeInfo.description,
        publishedDate: item.volumeInfo.publishedDate ? item.volumeInfo.publishedDate : '1900-01-01'
      }));
      // подгрузка книг к уже сущестующему массиву по кнопке LoadMore;
      if (addToExisting) {
        setBooks(books => [...books, ...newBooks]);
      } else {
        setBooks(newBooks);
      }
      setIsLoading(false);
    });
  }

  // сортировка книг по дате;
  function handleChangeSorting(sortByDate) {
    setSortByDate(sortByDate);
  }

  // загрузка книг по нажатию на поиск и Enter;
  function handleSubmit(query) {
    setQuery(query);
    setIsLoading(true);
    getBooks(query, category, startIndex, maxResult, false);
    setIsBookList(true);
  }

  // выбор книги по категории из выпадающего списка;
  function handleCategoryChange(category) {
    setCategory(category);
  }

  // загрузить еще книги с шагом пагинации = 5;
  function handleClickOnButtonLoadMore() {
    const newStartIndex = startIndex + 1 * maxResult;
    getBooks(query, category, newStartIndex, maxResult, true);
    setStartIndex(newStartIndex);
  }

  // крткое описание выбранной книги;
  function handleBookClick(book) {
    setSelectedBook(book);
  }

  return (
    <div className="page">
        <Header handleSubmit={handleSubmit} handleCategoryChange={handleCategoryChange} onChangeSorting={handleChangeSorting} />
        <Switch>
        {isLoading ? 
          <Spinner /> : 
          <Route exact path="/">
            <BooksList books={books} totalItems={totalItems} onClick={handleClickOnButtonLoadMore} handleClick={handleBookClick} isBookList={isBookList} sortByDate={sortByDate} />
          </Route>}
        <Route path="/about-book">
            <AboutBook book={selectedBook}/>
        </Route> 
        </Switch>
    </div>
  );
}

export default App;
