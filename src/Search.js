import React from 'react'
import { Link } from 'react-router-dom'
// import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class Search extends React.Component {
    state = {
      inputValue: '',
      searchedBooks: ''
    }

    // componentWillReceiveProps() {
    //   console.log(this.state.inputValue)
    //   BooksAPI.search(this.state.inputValue).then((books) => this.setState({searchedBooks: books}))
    //   console.log(this.state.searchedBooks)
    // }

    updateInput(e) {
      this.setState({ inputValue: e.target.value })
      BooksAPI.search(this.state.inputValue).then((books) => this.setState({searchedBooks: books}))
      console.log(this.state.inputValue)
      console.log(this.state.searchedBooks)
    }

    render() {
      // console.log(this.state.inputValue)
      // console.log(this.state.searchedBooks)
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search" >Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={(e) => this.updateInput(e)}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )
    }
}

export default Search