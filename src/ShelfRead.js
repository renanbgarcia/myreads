import React from 'react'
import './App.css'
import ShelfControl from './ShelfControl'

class ShelfRead extends React.Component {
	render() {
		let booksToSHow = []
		if (typeof this.props.books === 'object') {
			const match = new RegExp("read")
			booksToSHow = this.props.books.filter((book) => match.test(book.shelf))
		}
		return (
			<ol className="books-grid">
				{booksToSHow.map((book) =>
					<li key={book.id}>
						<div className="book" >
							<div className="book-top">
								<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")`}}></div>
								<ShelfControl bookID={book.id} shelf={book.shelf} action={this.props.action}/>
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

export default ShelfRead