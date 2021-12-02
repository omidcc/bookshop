import React from "react"
import BookItem from "./BookItem"

const BookItemList =(props)=>{
    const books = Array.from(props.books);

    return (
        <div className="row">
            { books.map(bookItem=>{ return <BookItem book={bookItem} key={bookItem._id}/>})}
        </div>
    )
}

export default BookItemList;