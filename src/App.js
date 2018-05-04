import React,{Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'


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
          <a onClick={this.props.onSwitchPage}>Add a book</a>
        </div>
      </div>

    )
  }
}


class BookShelf extends Component {
  render(){
    return (
      <div className="bookshelf">
        <BookCategory title={this.props.bookcategory} />
        <BookList books={this.props.booklist}/>
     </div>
    )
  }
}

class BookCategory extends Component{
  render(){
    return (
      <h2 className="bookshelf-title">{this.props.title}</h2>
    )
  }
}

class BookList extends Component {
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

class Book extends Component {
  render(){
    const book = this.props.book
    return (
        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.thumbnail: ''})`}}></div>
            <BookCategoryList />
          </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

class BookCategoryList extends Component {
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

class SearchBook extends Component {


  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={this.props.onSwitchPage}>Close</a>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
            <BookList books={Sbook}/>
        </div>
    </div>
    )
  }
}

const Sbook = [
  {id:1,title:'To Kill a Mockingbird',authors:'Harper Lee',imageLinks:{thumbnail:'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'},shelf:'Currently Reading'},
  {id:2,title:'Enders Game',authors:'Orson Scott Card',imageLinks:{thumbnail:'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api'},shelf:'Currently Reading'},

  {id:3,title:'1776',authors:'David McCullough',imageLinks:{thumbnail:'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api'},shelf:'Want to Read'},
  {id:4,title:'Harry Potter and the Sorcerers Stone',authors:'J.K. Rowling',imageLinks:{thumbnail:'http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api'},shelf:'Want to Read'},

  {id:5,title:'Oh, the Places Youll Go!',authors:'Seuss',imageLinks:{thumbnail:'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api'},shelf:'Read'},
  {id:6,title:'The Adventures of Tom Sawyer',authors:'J.K. Rowling',imageLinks:{thumbnail:'http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api'},shelf:'Read'},
];

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  switchPage = () => {
    this.setState({ showSearchPage: !this.state.showSearchPage })
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBook onSwitchPage={this.switchPage} />
        ) : (
          <Shelf title='My Reads' books={Sbook} onSwitchPage={this.switchPage}/>
        )}
      </div>
    )
  }
}

export default BooksApp
