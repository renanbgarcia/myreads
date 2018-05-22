import React from 'react'
import { Link } from 'react-router-dom'
// import { Route } from 'react-router-dom'
import ShelfReading from './ShelfReading'
import ShelfWants from './ShelfWants'
import ShelfRead from './ShelfRead'
import * as BooksAPI from './BooksAPI'
import './App.css'

class Shelves extends React.Component {

    constructor(props) {
      super(props)
      this.moveToShelf = this.moveToShelf.bind(this)
    }

    state = {
        books: []
    }

    moveToShelf(key, e) {
      console.log(e)
      let newstate = this.state.books.map(function(book) {
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
      this.setState({books: newstate})
    }

    componentWillMount() {
        BooksAPI.getAll().then((books) => this.setState({books}))
    }

    render() {
        console.log(this.state.books)
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
                      <ShelfReading books={this.state.books} action={this.moveToShelf}/>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ShelfWants books={this.state.books} action={this.moveToShelf}/>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ShelfRead books={this.state.books} action={this.moveToShelf}/>
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