import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {Route,BrowserRouter} from 'react-router-dom';
import Shelf from './Shelf';

describe('Shelf', () => {

   it('renders Shelf', () => {
       const output = renderer.create(
        <BrowserRouter>
          <Route path='/' render={()=>(
            <Shelf books={book} shelves={shelves} onMoveBook={onMoveBook} /> )} />
        </BrowserRouter>
      )
       expect(output).toMatchSnapshot()
   })

})
