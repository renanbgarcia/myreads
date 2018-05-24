import React from 'react'
import './App.css'
import ShelfControl from './ShelfControl'
import Search from './Search'
import { search } from './BooksAPI'

class SearchResult extends React.Component {
  render () {
    let booksToSHow = []
    if (typeof this.props.books === 'object') {
      booksToSHow = this.props.books
    }

    // Verifica se o livro pesquisado já está numa prateleira e se estiver adiciona essa info ao objeto
    for (let sbook of this.props.shelfbooks) {
      booksToSHow.map(function (book) {
        if (book.id === sbook.id) {
          book.shelf = sbook.shelf
        } else if (!book.hasOwnProperty('shelf')) {
          book.shelf = 'none'
        }
      })
    }

    booksToSHow = booksToSHow.map(function (book) {
      if (book.hasOwnProperty('imageLinks')) {
        return book
      } else {
        book.imageLinks = {'smallThumbnail': ''}
        return book
      }
    })

    return (
      <ol className='books-grid'>
        {booksToSHow.map((book) =>
          <li key={book.id}>
            <div className='book' >
              <div className='book-top'>
                <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")`}} />
                <ShelfControl bookID={book.id} shelf={book.shelf} book={book} action={this.props.action} />
              </div>
              <div className="book-title">{book.title}</div>
							<div className="book-authors">{book.authors}</div>
            </div>
          </li>
          )
        }
      </ol>
    )
  }
}

export default SearchResult
