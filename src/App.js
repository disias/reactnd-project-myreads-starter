import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Shelf'
import SearchBook from './SearchBook'
import bySort from 'sort-by'
import {Route} from 'react-router-dom'

/**
 *
 *
 * @class BooksApp
 * @extends {Component}
 */
class BooksApp extends Component {

  state = {
      bookshelf:[],
      booksResearched:[],
      searchText:''
  }

  searchByText = (searchText) => {
    // atualiza o estado do texto da pequisa
    this.setState({searchText})
    // verifica se a pequisa não está vazia para evitar erro 403
    if(searchText){
      // consulta a Api com texto passado
      BooksAPI.search(searchText).then( books => {
        // trata o retorno da pequisa , pois se não não for encontrado nenhum livro volta um objeto porem com o atributo .erro
        books = books.error ? [] : books ;
        // seta o estado com os novos livros, porém antes verifica se nos livros pesquisados tem algum da estante de livros para
        // atualizar a prateleira
        this.setState( prevState => ({
          booksResearched : books.map(updateBookWithShelf => {
            const bookshelf = prevState.bookshelf.filter(book => updateBookWithShelf.id === book.id);
            updateBookWithShelf.shelf = bookshelf.length > 0 ? bookshelf[0].shelf : 'none';
            return updateBookWithShelf;
          })
        }))
      })
    }
  }


  moveBook = (book,shelf) => {
    // chama a Api para mover um livro de um prateleira para outra
    BooksAPI.update(book,shelf).then(result => {
      // atribui o livro a prateleira escolhida
      book.shelf = shelf
      // atualiza o livro na variavel de estado onde fica armazenado os livros
      this.setState(prevState => ({
        bookshelf: prevState.bookshelf.filter(bookFilter => bookFilter.id !== book.id).concat([ book ])
      }))
    })
  }

  getMyBooks = () =>{
    // chama a Api para trazer os livros da minha prateleira de livros
    BooksAPI.getAll().then((books)=>{
      this.setState({ bookshelf : books.sort(bySort('shelf')) })
      this.clearSearch()
    })
  }

  clearSearch = () =>{
    // limpa o estado da pesquisa toda vez que o componente for desmontado
      this.setState({ booksResearched:[] , searchText: '' })
  }

  componentWillUnmount() {
    console.log('BooksApp-componentWillUnmount')
 }

  componentDidMount(){
    console.log('BooksApp-componentDidMount')
    this.getMyBooks()
  }

  render() {

    return (
      <div className="app">
        <Route exact path='/' render={() =>(
          <Shelf title='MyReads'
          books={this.state.bookshelf}
          shelves={this.props.shelves}
          onMoveBook={this.moveBook}
          onGetMyBook={this.getMyBooks}
          />
        )} />
        <Route path='/search' render={({ history }) =>(
          <SearchBook
            books={this.state.booksResearched}
            shelves={this.props.shelves}
            searchText={this.state.searchText}
            onMoveBook={this.moveBook}
            onSearchByText={this.searchByText}
            onClearSearch={this.clearSearch}/>
        )} />
      </div>
    )
  }
}

export default BooksApp;
