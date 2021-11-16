import { useHistory } from 'react-router';
import './AboutBook.css'

function AboutBook({ book }) {
    const history = useHistory();

    return(
        <>
        <div className="book">
            <img src={book.link} alt={book.alt} className="book__foto" />
            <div className="book__info">
                <p className="book__category_type_bigSize">{book.category}</p>
                <h2 className="book__title_type_bigSize">{book.title}</h2>
                <p className="book__authors_type_bigSize">{book.authors}</p>
                <div className="border">
                    <p className="book__description_type_bigSize">{book.description}</p>
                </div>
            </div>
        </div>
        <button type="button" className="book__button-goBack" onClick={() => history.goBack()}>Назад</button>
        </>
    )
}

export default AboutBook;