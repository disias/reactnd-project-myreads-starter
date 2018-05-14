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

  static propTypes = {
    books: PropTypes.arrayOf(
      PropTypes.shape({
      title: PropTypes.string,
      authors: PropTypes.arrayOf(PropTypes.string),
      imageLinks: PropTypes.shape({thumbnail :PropTypes.string})}))
  };

  componentWillUnmount() {
    console.log('BookList-componentWillUnmount')
  }

  componentDidMount(){
    console.log('BookList-componentDidMount')
  }



  render(){
    const { books , shelves , onMoveBook } = this.props;
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
