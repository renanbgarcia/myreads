import React from 'react'
import { Link } from 'react-router-dom'
// import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchResult from './SearchResult'
import Shelves from './Shelves'
import './App.css'

class Search extends React.Component {
    state = {
      inputValue: '',
      searchedBooks: []
    }

    doSearch(e) {
      BooksAPI.search(e.target.value).then((books) => this.setState({searchedBooks: books}))
      this.setState({inputValue: e.target.value})
    }

    ShowList() {
      if (typeof this.state.searchedBooks !== 'undefined' && !this.state.searchedBooks.hasOwnProperty('error') && this.state.inputValue !== ' ') {
        return (<SearchResult books={this.state.searchedBooks} shelfbooks={this.props.books} action={this.props.action}/>)
      }
    }

    render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search" >Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={(e) => this.doSearch(e)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">{this.ShowList()}</ol>
            </div>
          </div>
        )
    }
}

export default Search