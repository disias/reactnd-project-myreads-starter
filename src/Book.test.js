import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'
import Book, { BookList } from './Book';
import {ShelfBookCategoryList}  from './Shelf'

/**
 This course is not designed to teach Test Driven Development.
 Feel free to use this file to test your application, but it
 is not required.
**/

const element = <ShelfBookCategoryList />


describe('Book', () => {
    const book = {
    id:1,
    title:'To Kill a Mockingbird',
    authors:['Harper Lee'],
    imageLinks: {
    thumbnail:'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'},
    shelf:'Currently Reading'};

    it('renders without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(<Book book={book} />, div)
    })

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

    it('testando se renderizou o title usando selector', () => {
      const wrapper = shallow(<Book book={book} /> )
      expect(wrapper.find('[data-teste="title"]').text()).toEqual(book.title);
    })

    it('testando se renderizou o authors usando selector', () => {
      const wrapper = shallow(<Book book={book} /> )
      expect(wrapper.find('[data-teste="authors"]').text()).toEqual(...book.authors);
    })

    it('testando se renderizou o imageLinks usando selector', () => {
      const wrapper = shallow(<Book book={book} /> )
      expect(wrapper.find('[data-teste="imageLinks"]').prop('style')).toHaveProperty('backgroundImage',`url(${book.imageLinks.thumbnail})`);
    })

    it('testando se renderizou o element', () => {
      const wrapper = shallow(<Book book={book} element={element} /> )
      expect(wrapper.contains(element)).toBe(true);
    })

})


describe('ListBook', () => {
  const books = [ {id:1,title:'To Kill a Mockingbird',authors:['Harper Lee'],imageLinks:{thumbnail:'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'},shelf:'Currently Reading'},
                  {id:2,title:'Enders Game',authors:['Orson Scott Card'],imageLinks:{thumbnail:'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api'},shelf:'Currently Reading'} ];

  it('renders booklist', () => {
      const output = renderer.create( <BookList books={books} element={element} />)
      expect(output).toMatchSnapshot()
  })

})
