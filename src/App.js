import React from 'react'
// import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import Shelves from './Shelves'

class BooksApp extends React.Component {

  constructor() {
    super()
    this.moveToShelf = this.moveToShelf.bind(this)
    this.addBook = this.addBook.bind(this)
  }

  state = {
    books: []
  }

  // Chamado pelos controles da página principal para mudar o livro de prateleira
  moveToShelf(key, e) {
    let newstate = this.state.books.map(function (book) {
      if (book.id === key) {
        book.shelf = e.target.value;
        BooksAPI.update(book, e.target.value)
        return book
      } else {
        return book
      }
    })
    for (let [key, book] of Object.entries(this.state.books)) {
      if (book.shelf === 'none') {
        newstate = this.state.books.splice(key, 1)
      }
    }
    this.setState(this.state)
  }

  //Chamado na página de busca para adicionar um livro à pagina principal
  addBook(key, e, book) {
    book.shelf = e.target.value
    let shelfIds = this.state.books.map((book) => book.id)
      if(!shelfIds.includes(key)) {
        this.state.books.push(book)
      }
    BooksAPI.update(book, e.target.value)
  }

  componentWillMount() {
    BooksAPI.getAll().then((books) => this.setState({
      books
    }))
  }

  render() {
    return (
      <div className="app"> 
        <Route exact path='/' render={() => <Shelves books={this.state.books} action={this.moveToShelf} /> }/>
        <Route exact path='/Search' render={() => <Search action={this.addBook} books={this.state.books} />}/>
      </div>
    )
  }
}

export default BooksApp
