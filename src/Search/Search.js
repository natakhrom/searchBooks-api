import React from 'react';
import './Search.css';

function Search(props) {
    const [query, setQuery] = React.useState('');

    function handleQueryChange(e) {
        setQuery(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        props.onSubmit(query);
    }

    function handleCategoryChange(e) {
        props.onCategoryChange(e.target.value);
    }

    function handleChangeSorting(e) {
        props.onChangeSorting(e.target.value === 'relevance'
                                ? false : true);
    }

    return (
        <form className="search__form" onSubmit={onSubmit}>
            <div className="search__row">
                <input className="search__input" name="search" defaultValue="" onChange={handleQueryChange}></input>
                <button className="search__button" type="submit"></button>
            </div>
            <div className="search__param">
                <label className="search__description">Categories
                    <select className="search__select" onChange={handleCategoryChange}>
                        <option value="all">all</option>
                        <option value="art">art</option>
                        <option value="biography">biography</option>
                        <option value="computers">computers</option>
                        <option value="history">history</option>
                        <option value="medical">medical</option>
                        <option value="poetry">poetry</option>
                </select>
                </label>
                <label className="search__description">Sorting by
                    <select className="search__select" onChange={handleChangeSorting}>
                        <option>relevance</option>
                        <option>newest</option>
                    </select>
                </label>
            </div>
        </form>
    )
}

export default Search;