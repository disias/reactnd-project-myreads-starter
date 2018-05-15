import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

describe('BooksApp', () => {

   xit('renders BooksApp', () => {
       const output = renderer.create(<BrowserRouter><App shelves={shelves}/></BrowserRouter>)
       expect(output).toMatchSnapshot()
   })

})
