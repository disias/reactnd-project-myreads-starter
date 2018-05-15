import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {Route,BrowserRouter} from 'react-router-dom';
import BookList from './BookList';

describe('ListBook', () => {

   it('renders booklist', () => {
       const output = renderer.create(
        <BrowserRouter>
          <Route path='/' render={()=>(
            <BookList books={book} shelves={shelves} onMoveBook={onMoveBook} /> )} />
        </BrowserRouter>
      )
       expect(output).toMatchSnapshot()
   })

})
