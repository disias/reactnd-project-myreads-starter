import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {Route,BrowserRouter} from 'react-router-dom';
import {shallow} from 'enzyme';
import Book from './Book';
/**
 This course is not designed to teach Test Driven Development.
 Feel free to use this file to test your application, but it
 is not required.
**/

describe('Book', () => {
    it('renders Book complete without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(
      <BrowserRouter>
      <Route path='/' render={()=>(
        <Book book={book[0]} shelves={shelves} onMoveBook={onMoveBook} />)} />
      </BrowserRouter >, div)
    })

    it('renders Book incomplete without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(
      <BrowserRouter >
      <Route path='/' render={()=>(
        <Book book={book[1]} shelves={shelves} onMoveBook={onMoveBook} />)} />
      </BrowserRouter >, div)
    })

    it('renders Book title', () => {
      const wrapper = shallow(<Book book={book[1]} shelves={shelves} onMoveBook={onMoveBook} />)
      expect(wrapper.find('[data-teste="title"]').text()).toEqual(book[0].title);
    })

    it('renders Book Authors with once Author', () => {
      const wrapper = shallow(<Book book={book[0]} shelves={shelves} onMoveBook={onMoveBook} /> )
      expect(wrapper.find('[data-teste="authors"]').text()).toEqual(...book[0].authors);
    })

    it('renders Book Authors with twice Author', () => {
      const wrapper = shallow(<Book book={book[1]} shelves={shelves} onMoveBook={onMoveBook} /> )
      expect(wrapper.find('[data-teste="authors"]').contains(book[1].authors[0])).toBe(true);
      expect(wrapper.find('[data-teste="authors"]').contains(book[1].authors[1])).toBe(true);
    })

    it('renders Book Authors without Author', () => {
      const wrapper = shallow(<Book book={book[2]} shelves={shelves} onMoveBook={onMoveBook} /> )
      expect(wrapper.find('[data-teste="authors"]').exists()).toBe(false);
    })

    it('renders Book with imageLinks', () => {
      const wrapper = shallow(<Book book={book[0]} shelves={shelves} onMoveBook={onMoveBook} /> )
      expect(wrapper.find('[data-teste="imageLinks"]').prop('style')).toHaveProperty('backgroundImage',`url(${book[0].imageLinks.thumbnail})`);
    })

    it('renders Book without imageLinks', () => {
      const wrapper = shallow(<Book book={book[1]} shelves={shelves} onMoveBook={onMoveBook} /> )
      expect(wrapper.find('[data-teste="imageLinks"]').prop('style')).toHaveProperty('backgroundImage',`url(${'./icons/placeholder.png'})`);
    })

    // it('renders Book ratingsCount', () => {
    //   const wrapper = shallow(<Book book={book[0]} shelves={shelves} onMoveBook={onMoveBook} />)
    //   expect(wrapper.find('[data-teste="ratingsCount"]').contains(book[0].ratingsCount)).toBe(true);
    // })

    // it('renders Book with shelves', () => {
    //   const wrapper = shallow(<Book book={book[1]} shelves={shelves} onMoveBook={onMoveBook} /> )
    //   expect(wrapper.find('[data-teste="shelf"]').contains(...shelves[0].value)).toBe(true);
    //   expect(wrapper.find('[data-teste="shelf"]').contains(...shelves[1].value)).toBe(true);
    //   expect(wrapper.find('[data-teste="shelf"]').contains(...shelves[2].value)).toBe(true);
    // })

    // it('testando se renderizou o title usando className', () => {
      //   const wrapper = shallow(<Book book={book} /> )
    //   expect(wrapper.find('.book-title').text()).toEqual(book.title);
    // })

    // it('testando se renderizou o title usando contains', () => {
    //    const wrapper = shallow(<Book book={book} /> )
    //    expect(wrapper.contains(book.title)).toBe(true)
    // })

    // it('testando se renderizou o authors usando className', () => {
    //   const wrapper = shallow(<Book book={book} /> )
    //   expect(wrapper.find('.book-authors').text()).toEqual(...book.authors);
    // })

    // it('testando se renderizou o authors usando contains', () => {
    //    const wrapper = shallow(<Book book={book} /> )
    //    expect(wrapper.contains(...book.authors)).toBe(true)
    // })

    // it('testando se renderizou o title usando selector', () => {
    //   const wrapper = shallow(<Book book={book} /> )
    //   expect(wrapper.find('[data-teste="title"]').text()).toEqual(book.title);
    // })

    // it('testando se renderizou o authors usando selector', () => {
    //   const wrapper = shallow(<Book book={book} /> )
    //   expect(wrapper.find('[data-teste="authors"]').text()).toEqual(...book.authors);
    // })

    // it('testando se renderizou o imageLinks usando selector', () => {
    //   const wrapper = shallow(<Book book={book} /> )
    //   expect(wrapper.find('[data-teste="imageLinks"]').prop('style')).toHaveProperty('backgroundImage',`url(${book.imageLinks.thumbnail})`);
    // })

    // it('testando se renderizou o element', () => {
    //   const wrapper = shallow(<Book book={book} element={element} /> )
    //   expect(wrapper.contains(element)).toBe(true);
    // })

})


// describe('ListBook', () => {
//   const books = [ {id:1,title:'To Kill a Mockingbird',authors:['Harper Lee'],imageLinks:{thumbnail:'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'},shelf:'Currently Reading'},
//                   {id:2,title:'Enders Game',authors:['Orson Scott Card'],imageLinks:{thumbnail:'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api'},shelf:'Currently Reading'} ];

//   it('renders booklist', () => {
//       const output = renderer.create( <BookList books={books} element={element} />)
//       expect(output).toMatchSnapshot()
//   })

// })
