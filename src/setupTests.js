// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};

const book = [
  {id:1,
  title:'To Kill a Mockingbird',
  authors:['Harper Lee'],
  imageLinks: {thumbnail:'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'},
  categories:["COMPUTERS"],shelf:'currentlyReading',ratingsCount:2,
  infoLink:"https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api"},
  {id:2,
  title:'To Kill a Mockingbird',
  authors:['Harper Lee','Teste2'],
  infoLink:"https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api"},
  {id:3,
  title:'To Kill a Mockingbird',
  imageLinks: {thumbnail:'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'},
  infoLink:"https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api"}
];

const shelves = [{key:"currentlyReading",value:"Currently Reading"},{key:"wantToRead",value:"Want to Read"},{key:"read",value:"Read"}];
const onMoveBook = jest.fn();
const onSearchByText = jest.fn();
const onClearSearch = jest.fn();
let booksResearched = []

global.book = book
global.shelves = shelves
global.onMoveBook = onMoveBook
global.onClearSearch = onClearSearch
global.onSearchByText = onSearchByText
global.localStorage = localStorageMock
