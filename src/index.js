import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const shelves = [{key:"currentlyReading",value:"Currently Reading"},{key:"wantToRead",value:"Want to Read"},{key:"read",value:"Read"}];

ReactDOM.render(<BrowserRouter><App shelves={shelves} /></BrowserRouter>, document.getElementById('root'));
