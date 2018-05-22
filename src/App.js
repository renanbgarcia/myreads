import React from 'react'
// import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import Shelves from './Shelves'

class BooksApp extends React.Component {

  constructor(props) {
    super(props)
    this.moveToShelf = this.moveToShelf.bind(this)
  }

  state = {
    books: []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false
  }

  moveToShelf(key, e) {
    console.log(e)
    let newstate = this.state.books.map(function (book) {
      console.log(book.id)
      console.log(key)
      if (book.id == key) {
        book.shelf = e.target.value;
        BooksAPI.update(book, e.target.value)
        return book
      } else {
        return book
      }
    })
    console.log(newstate)
    console.log(this.state)
    this.setState({
      books: newstate
    })
  }

  componentWillMount() {
    BooksAPI.getAll().then((books) => this.setState({
      books
    }))
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' component={Shelves} books={this.state.books} action={this.moveToShelf}/>
        <Route exact path='/Search' component={Search} books={this.state.books} action={this.moveToShelf}/>
      </div>
    )
  }
}

export default BooksApp
