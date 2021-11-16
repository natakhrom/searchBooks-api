import React from 'react';
import './Header.css';
import Search from '../Search/Search';

function Header({ handleSubmit, handleCategoryChange, onChangeSorting }) {
    return (
        <header className="header">
            <h1 className="header__heading">Search for books</h1>
            <Search onSubmit={handleSubmit} onCategoryChange={handleCategoryChange} onChangeSorting={onChangeSorting} />
        </header>
    )
}

export default Header;