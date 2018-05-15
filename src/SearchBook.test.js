import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {Route,BrowserRouter} from 'react-router-dom';
import SearchBook from './SearchBook';

describe('SearchBook', () => {

   it('renders SearchBook', () => {
       const output = renderer.create(
        <BrowserRouter>
          <Route path='/search' render={()=>(
            <SearchBook
            books={[]}
            shelves={shelves}
            searchText={''}
            onMoveBook={onMoveBook}
            onSearchByText={onSearchByText}
            onClearSearch={onClearSearch}/>
        )} />
        </BrowserRouter>
      )
       expect(output).toMatchSnapshot()
   })

})
