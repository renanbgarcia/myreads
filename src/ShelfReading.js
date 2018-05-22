import React from 'react'
import './App.css'
import ShelfControl from './ShelfControl'

class ShelfReading extends React.Component {
    render() {
        // console.log(this.props.books)
        // const match = new RegExp("currentlyReading")
        // let showingBooks = this.props.books.filter((book) => match.test(book.shelf))
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

export default ShelfReading