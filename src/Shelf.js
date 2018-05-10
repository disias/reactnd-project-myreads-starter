import React ,{Component}  from 'react'
import {BookList} from './Book'
import {Link} from 'react-router-dom'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'
import {search,update}  from './BooksAPI'

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

  render(){
    // inicia as variaveis
    const title = this.props.title;
    let books = this.props.books;
    let elements = <h2 align='center'>Você não possui livros na sua instante ou não foi possivel carregar seus livros.</h2>;

    // verifica se existe livros
    if (books.length > 0 ){
      // inicia as variaveis
      let lastCategory = '';
      let shelfBooks = [];
      elements = [];

      // ordena o retorno de livro e inicia a variavel de quebra
      books.sort(sortBy('self'))
      lastCategory = books[0].shelf

      // gera elementos ShelfBooks com seus respequitivos livros
      books.forEach((book,index,array) => {

        // verifica se a categoria mudou e sé o ultimo registro
        if(lastCategory !== book.shelf || index+1 === array.length  ){
          // adiciona o ultimo livro se for o ultimo registro pq não existe mais quebra
          if (index+1 === array.length){
            shelfBooks.push(book)
          }
          // adiciona o Shelfbooks ao array que sera renderizado , muda a categoria de quebra e zera
          // os array correspondentes aos livros da categoria
          elements.push(<ShelfBooks key={lastCategory} bookcategory={lastCategory} booklist={shelfBooks}/>)
          lastCategory = book.shelf
          shelfBooks = []
        }
        // adiciona os array correspondentes aos livros da categoria se não for o ultimo registro
        if (index+1 !== array.length){
          shelfBooks.push(book)
        }

      });

    }

    return (
      <div className="list-books">
          <div className="list-books-title">
            <h1>{title}</h1>
          </div>
        <div className="list-books-content">
          <div>
            {elements}
          </div>
        </div>
        <div className="open-search">
            <Link to='/search' >Add a book</Link>
        </div>
      </div>

    )
  }
}


export class ShelfBooks extends Component {

  // PropTypes Default
  static defaultProps = {
    booklist: []
  };

  // PropTypes
  static propTypes = {
    bookcategory: PropTypes.string.isRequired,
    booklist: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      authors: PropTypes.arrayOf(PropTypes.string),
      imageLinks: PropTypes.shape({thumbnail :PropTypes.string})}))
  };

  render(){
    return (
      <div className="bookshelf">
        <ShelfBookCategory title={this.props.bookcategory} />
        <BookList books={this.props.booklist} element={<ShelfBookCategoryList/>}/>
     </div>
    )
  }
}


export class ShelfBookCategory extends Component {

  // PropTypes
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render(){
    return (
      <h2 className="bookshelf-title">{this.props.title}</h2>
    )
  }
}


export class ShelfBookCategoryList extends Component {
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

  filterTextChange = (event) => {
    this.props.onfilterTextChange(event.target.value)
  }

  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"
            value={this.props.filterText}
            onChange={this.filterTextChange}/>
          </div>
        </div>
        <div className="search-books-results">
            <BookList books={this.props.books}/>
        </div>
    </div>
    )
  }
}

export default Shelf
