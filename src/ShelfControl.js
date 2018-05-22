import React from 'react'
import './App.css'
import Shelves from './Shelves'
    
class ShelfControl extends React.Component {
    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={(e) => this.props.action(this.props.bookID, e)}>
                <option value="none" disabled>Move to...</option>
                {/* Parece que que a opção seguinte ao disabled não funciona, então coloquei um vazio antes das opções de verdade */}
                <option value=""></option>
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