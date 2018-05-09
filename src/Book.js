import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

  static defaultProps = {
    element: null
  };

  static propTypes = {
    book: PropTypes.shape({
      title: PropTypes.string,
      authors: PropTypes.arrayOf(PropTypes.string),
      imageLinks: PropTypes.shape({thumbnail :PropTypes.string})}),
    element: PropTypes.element
  };

  render(){
    const book = this.props.book;
    const element = this.props.element;
    return (
        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.thumbnail: ''})`}} data-teste="imageLinks"></div>
            {element}
          </div>
        <div className="book-title" data-teste="title" >{book.title}</div>
        <div className="book-authors" data-teste="authors">{book.authors}</div>
      </div>
    )
  }
}



export class BookList extends Component {

  static defaultProps = {
    element: null
  };

  static propTypes = {
    books: PropTypes.arrayOf(
      PropTypes.shape({
      title: PropTypes.string,
      authors: PropTypes.arrayOf(PropTypes.string),
      imageLinks: PropTypes.shape({thumbnail :PropTypes.string})})),
    element: PropTypes.element
  };

  render(){
    const element = this.props.element;
    const books   =  this.props.books.map(book =>(
      <li key={book.id} ><Book book={book} element={element} /></li>
    ))

    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books}
        </ol>
      </div>
    )
  }
}

export default Book
