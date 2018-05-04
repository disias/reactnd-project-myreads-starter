import React ,{Component}  from 'react'
import {BookList} from './Book'
import {Link} from 'react-router-dom'

class Shelf extends Component {
  render(){
    let lastCategory = this.props.books[0].shelf;
    let books = [];
    return (
      <div className="list-books">
          <div className="list-books-title">
            <h1>{this.props.title}</h1>
          </div>
        <div className="list-books-content">
          <div>
              {this.props.books.map( (book,index,array) => {
                  let element = null
                  if(lastCategory !== book.shelf || index+1 === array.length  ){
                    if (index+1 === array.length){
                      books.push(book)
                    }
                    element = <BookShelf key={lastCategory} bookcategory={lastCategory} booklist={books}/>
                    lastCategory = book.shelf
                    books = []
                  }
                  if (index+1 !== array.length){
                    books.push(book)
                  }
                  return element
              })}
          </div>
        </div>

        <div className="open-search">
            <Link to='/search' >Add a book</Link>
        </div>
      </div>

    )
  }
}


export class BookShelf extends Component {
  render(){
    return (
      <div className="bookshelf">
        <BookShelfCategory title={this.props.bookcategory} />
        <BookList books={this.props.booklist}/>
     </div>
    )
  }
}


export class BookShelfCategory extends Component{
  render(){
    return (
      <h2 className="bookshelf-title">{this.props.title}</h2>
    )
  }
}


export class BookShelfCategoryList extends Component {
  render(){
    return (
      <div className="book-shelf-changer">
      <select>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
    )
  }
}


export class ShelfSearchBook extends Component {
  state = {
    books: []
  }

  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
            <BookList books={this.state.books}/>
        </div>
    </div>
    )
  }
}

export default Shelf
