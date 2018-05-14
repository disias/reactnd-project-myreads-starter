import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import debounce from 'lodash.debounce';
import BookList from './BookList'

class SearchBook extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.emitChangeDebounced = debounce(this.emitChange, 250);
  }

  componentWillUnmount() {
    this.emitChangeDebounced.cancel();
    this.props.onClearSearch();
    console.log('SearchBook-componentWillUnmount')
  }

  componentDidMount(){
    console.log('SearchBook-componentDidMount')
  }

  handleChange(e) {
    this.emitChangeDebounced(e.target.value.trim());
  }

  emitChange(value) {
    this.props.onSearchByText(value)
  }



  render(){
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
