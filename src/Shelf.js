import React from 'react';
import BookList from './BookList';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Shelf = function (props){
  const { title , books , shelves , onMoveBook } = props;
  const elements = shelves.map( shelf => (
      <div className="bookshelf" key={shelf.key}>
        <h2 className="bookshelf-title">{shelf.value}</h2>
        <div className="bookshelf-books">
          <BookList
            books={books.filter((book) => book.shelf === shelf.key)}
            shelves={shelves}
            onMoveBook={onMoveBook}/>
        </div>
      </div>
    ));

    return (
      <div className="list-books">
          <div className="list-books-title">
            <h1>{title}</h1>
          </div>
        <div className="list-books-content">
          <div>
            { elements }
          </div>
        </div>
        <div className="open-search">
            <Link to='/search' >Add a book</Link>
        </div>
      </div>
  )
};

// PropTypes Default
Shelf.defaultProps = {
  title: 'MyReads'
};

//PropType  Shelf
Shelf.propTypes = {
  title: PropTypes.string,
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  onMoveBook : PropTypes.func.isRequired
};

export default Shelf;
