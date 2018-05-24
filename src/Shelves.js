import React from 'react'
import { Link } from 'react-router-dom'
// import { Route } from 'react-router-dom'
import ShelfReading from './ShelfReading'
import ShelfWants from './ShelfWants'
import ShelfRead from './ShelfRead'
import * as BooksAPI from './BooksAPI'
import './App.css'

class Shelves extends React.Component {

  render () {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ShelfReading books={this.props.books} action={this.props.action}/>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ShelfWants books={this.props.books} action={this.props.action}/>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ShelfRead books={this.props.books} action={this.props.action}/>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Shelves