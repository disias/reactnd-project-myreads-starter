import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf,{ShelfSearchBook} from './Shelf'
import {Route} from 'react-router-dom'

// const Sbook = [
//   {id:1,title:'To Kill a Mockingbird',authors:'Harper Lee',imageLinks:{thumbnail:'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'},shelf:'Currently Reading'},
//   {id:2,title:'Enders Game',authors:'Orson Scott Card',imageLinks:{thumbnail:'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api'},shelf:'Currently Reading'},

//   {id:3,title:'1776',authors:'David McCullough',imageLinks:{thumbnail:'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api'},shelf:'Want to Read'},
//   {id:4,title:'Harry Potter and the Sorcerers Stone',authors:'J.K. Rowling',imageLinks:{thumbnail:'http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api'},shelf:'Want to Read'},

//   {id:5,title:'Oh, the Places Youll Go!',authors:'Seuss',imageLinks:{thumbnail:'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api'},shelf:'Read'},
//   {id:6,title:'The Adventures of Tom Sawyer',authors:'J.K. Rowling',imageLinks:{thumbnail:'http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api'},shelf:'Read'},
// ];

class BooksApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books:[],
      filterText:''
    };
  }

  filterTextChange = (filterText) => {
    BooksAPI.search(filterText.trim()).then((books)=>{
      if (books.error){
        this.setState({ books : [] })
      }else{
        this.setState({ books })
      }
    })
  }


  componentDidMount(){
    console.log('componentDidMount')
    BooksAPI.getAll().then((books)=>{
      console.log(books)
      this.setState({ books })
    })
  }

  // componentWillUnmount() {
  //   console.log('componentWillUnmount')
  //   this.setState({
  //   books:[],
  //   filterText:''
  //   })
  // }

  // clearState = () =>{
  //   this.setState({
  //     books:[],
  //     filterText:''
  //     })
  // }


  render() {

    return (
      <div className="app">
        <Route exact path='/' render={() =>(
          <Shelf title='MyReads' books={this.state.books} />
        )} />
        <Route path='/search' render={({ history }) =>(
          <ShelfSearchBook filterText={this.state.filterText} onfilterTextChange={this.filterTextChange} books={this.state.books} />
        )} />
      </div>
    )
  }
}

export default BooksApp
