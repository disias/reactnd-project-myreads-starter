import React ,{Component}  from 'react'
import BookList from './BookList'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class Shelf extends Component {

  // PropTypes Default
  static defaultProps = {
    title: 'MyReads',
    books: []
  };

  // PropTypes
  static propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      authors: PropTypes.arrayOf(PropTypes.string),
      imageLinks: PropTypes.shape({thumbnail :PropTypes.string})})),
    title: PropTypes.string
  };

  componentDidMount(){
    console.log('Shelf-componentDidMount')
  }

  componentWillUnmount() {
    console.log('Shelf-componentWillUnmount')
  }


  render(){

    const { title , books , shelves , onMoveBook } = this.props;

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
  }
}

export default Shelf
