import React from "react"

const BookItem =(props)=>{
    const book = props.book

    return(
        
        <div className="col-md-4">
            <img src={book.cover} alt={book.title} style={{"maxWidth":"300px"}}/>
        </div>
    )
}

export default BookItem;