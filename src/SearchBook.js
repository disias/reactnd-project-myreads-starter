import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import BookList from './BookList';
/**
 *
 *
 * @class SearchBook
 * @extends {Component}
 */
class SearchBook extends Component {

  //PropType  SearchBook
  static propTypes = {
    books: PropTypes.array.isRequired,
    searchText: PropTypes.string.isRequired,
    shelves: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired,
    onClearSearch: PropTypes.func.isRequired,
    onSearchByText: PropTypes.func.isRequired
  };

  // implentando a sintaxe do construtor para fazer o debounce do campos search
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.emitChangeDebounced = debounce(this.emitChange, 250);
  }

  // quando o componente for desmonstado limpa a pesquisa e cancela o debounce do campo
  componentWillUnmount() {
    this.emitChangeDebounced.cancel();
    this.props.onClearSearch();
    console.log('SearchBook-componentWillUnmount')
  }

  componentDidMount(){
    console.log('SearchBook-componentDidMount')
  }

  // função que server como ponte para o debounce ela funciona como uma ponte entra
  // a função da Api que sera chamada e o tempo de 250 milisegundos de espera ate o valor
  // do evento ser retornado
  handleChange(e) {
    this.emitChangeDebounced(e.target.value.trim());
  }

  // chama a função da Api passada via props que retorna os dados para alimentar o BookList
  emitChange(value) {
    this.props.onSearchByText(value)
  }



  render(){
    //tribuição via desestruturação é uma expressão JavaScript que possibilita
    //extrair dados de arrays ou objetos em variáveis distintas.
    const { books , shelves , searchText, onMoveBook  } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" defaultValue={searchText} onChange={this.handleChange}/>
          </div>
        </div>
        <div className="search-books-results">
            <BookList books={books}
                      shelves={shelves}
                      onMoveBook={onMoveBook} />
        </div>
      </div>
    )
  }
}

export default SearchBook;
