import React from 'react'
import './App.css'
import Shelves from './Shelves'

class ShelfControl extends React.Component {
  render () {
    return (
      <div className="book-shelf-changer">
        <select value={this.props.shelf}  onChange={(e) => this.props.action(this.props.bookID, e, this.props.book)}>
          <option disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfControl
