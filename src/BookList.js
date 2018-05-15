import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = function(props){
  //tribuição via desestruturação é uma expressão JavaScript que possibilita
  //extrair dados de arrays ou objetos em variáveis distintas.
  const { books , shelves , onMoveBook } = props;
  // Alimenta o booklist com books
  const elements = books.map( book =>(
    <li key={book.id}>
      <Book book={book} shelves={shelves} onMoveBook={onMoveBook} />
    </li>
  ))

  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {elements}
      </ol>
    </div>
  )
};

//PropType  BookList
BookList.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  onMoveBook : PropTypes.func.isRequired
};


export default BookList;
