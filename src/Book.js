import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
/**
 *
 *
 * @class Book
 * @extends {Component}
 */

class Book extends Component {
  // PropType Book
  static propTypes = {
    book: PropTypes.shape({
      title: PropTypes.string,
      authors: PropTypes.arrayOf(PropTypes.string),
      imageLinks: PropTypes.shape({thumbnail :PropTypes.string}),
      categories: PropTypes.arrayOf(PropTypes.string),
      shelf: PropTypes.string,
      averageRating: PropTypes.number,
      infoLink:PropTypes.string
    }).isRequired,
    shelves: PropTypes.arrayOf(PropTypes.shape({
      key:PropTypes.string,
      value:PropTypes.string,
    })).isRequired,
    onMoveBook : PropTypes.func.isRequired
  };

  componentWillUnmount() {
    console.log('Book-componentWillUnmount')
  }

  componentDidMount(){
    console.log('Book-componentDidMount')
  }

  render(){
    //tribuição via desestruturação é uma expressão JavaScript que possibilita
    //extrair dados de arrays ou objetos em variáveis distintas.
    const { book , shelves , onMoveBook } = this.props;


    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.thumbnail: './icons/placeholder.png'})`}} data-teste="imageLinks"></div>
            <div className="book-shelf-changer" >
              <select defaultValue={book.shelf} onChange={(e) => onMoveBook(book,e.target.value.trim())}>
                <option disabled>Move to...</option>
                { shelves.map( shelf => (
                  <option data-teste="shelf" key={shelf.key} value={shelf.key}>{shelf.value}</option>
                ))}
                <option value="none">None</option>
              </select>
            </div>
        </div>
        <div className="book-title" data-teste="title" >{book.title}</div>

        {book.authors ? book.authors.map(author => (
          <div key={author} className="book-authors" data-teste="authors">{author}</div>
        )): null }

        {book.categories ? book.categories.map(category => (
          <div key={category} className="book-categories" data-teste="category">{category}</div>
        )) : null }

        <div className="book-rating">
          <StarRatingComponent
            data-teste="averageRating"
            name={`rating-bookid-${book.id}`}
            editing={false}
            value={book.averageRating}>
          </StarRatingComponent>
        </div>
        <Link to={`${book.infoLink}`} className="book-more-info" target="_blank" data-teste="infoLink" title="Info">( * ) Info</Link>
      </div>
    )
  }
}


export default Book;
