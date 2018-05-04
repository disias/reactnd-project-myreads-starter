import React,{Component} from 'react'
import {BookShelfCategoryList} from './Shelf'

class Book extends Component {
  render(){
    const book = this.props.book
    return (
        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.thumbnail: ''})`}}></div>
            <BookShelfCategoryList />
          </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}



export class BookList extends Component {
  render(){
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.books.map(book =>{
              return (<li key={book.id} ><Book book={book} /></li>)
          })}
        </ol>
      </div>
    )
  }
}

export default Book
