import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

/**
 *
 *
 * @export
 * @class BookList
 * @extends {Component}
 */
class BookList extends Component {

  //PropType  BookList
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    onMoveBook : PropTypes.func.isRequired
  };

  componentWillUnmount() {
    console.log('BookList-componentWillUnmount')
  }

  componentDidMount(){
    console.log('BookList-componentDidMount')
  }



   render(){
    //tribuição via desestruturação é uma expressão JavaScript que possibilita
    //extrair dados de arrays ou objetos em variáveis distintas.
    const { books , shelves , onMoveBook } = this.props;
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
  }
}


export default BookList;
