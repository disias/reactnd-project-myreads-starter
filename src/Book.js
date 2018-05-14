import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component'

class Book extends Component {


  static propTypes = {
    book: PropTypes.shape({
      title: PropTypes.string,
      authors: PropTypes.arrayOf(PropTypes.string),
      imageLinks: PropTypes.shape({thumbnail :PropTypes.string})})
  };

  componentWillUnmount() {
    console.log('Book-componentWillUnmount')
  }

  componentDidMount(){
    console.log('Book-componentDidMount')
  }

  render(){
    const { book , shelves , onMoveBook } = this.props;


    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.thumbnail: '/icons/placeholder.png'})`}} data-teste="imageLinks"></div>
            <div className="book-shelf-changer" >
              <select defaultValue={book.shelf} onChange={(e) => onMoveBook(book,e.target.value.trim())}>
                <option disabled>Move to...</option>
                { shelves.map( shelf => (
                  <option key={shelf.key} value={shelf.key}>{shelf.value}</option>
                ))}
                <option value="none">None</option>
              </select>
            </div>
        </div>
        <div className="book-title" data-teste="title" >{book.title}</div>

        {book.authors ? book.authors.map(author => (
          <div key={author} className="book-authors" data-teste="authors">{author}</div>
        )): '' }

        {book.categories ? book.categories.map(category => (
          <div key={category} className="book-categories" data-teste="category">{category}</div>
        )) : '' }

        <div className="book-rating">
          <StarRatingComponent
            editing={false}
            name='rating'
            value={book.averageRating}>
          </StarRatingComponent>
        </div>
        <Link to={`${book.infoLink}`} className="book-more-info" target="_blank" title="More info">[ + ] More Info</Link>
      </div>
    )
  }
}


export default Book;
