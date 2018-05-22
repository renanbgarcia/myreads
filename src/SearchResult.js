import React from 'react'
import './App.css'
import ShelfControl from './ShelfControl'
import Search from './Search'
import { search } from './BooksAPI';

class SearchResult extends React.Component {

    render() {
        console.log(typeof this.props.books)
        let booksToSHow = []
        if (typeof this.props.books === 'object') {
            booksToSHow = this.props.books
        }
        return (
                <ol className="books-grid">
                {booksToSHow.map((book) =>
                    <li key={book.id}>
                    <div className="book" >
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")`}}></div>
                        <ShelfControl bookID={book.id} action={this.props.action}/>
                    </div>
                    </div>
                    </li>
                    )
                }
            </ol>
        )
    }
}

export default SearchResult