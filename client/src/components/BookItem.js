import React from "react"
import { Card } from 'primereact/card';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';

const BookItem =(props)=>{
    const book = props.book
    const category = props.book.categories.reduce((pre,cur)=> `${pre.name}, ${cur.name}`)
    const stockStatus = !book.totalStock ? 'SOLD OUT': (book.totalStock < 10 ? 'LOW STOCK':'AVAILABLE')
    const stockClass = !book.totalStock ? 'badge-out-of-stock': (book.totalStock < 10 ? 'badge-low-stock':'badge-instock')
    const header = (
        <div>
            <div className="row p-2">
                <div className="col-sm-12 col-md-6">
                    <i className="pi pi-tag me-2"></i>
                    <span className="fw-600">{category}</span>
                </div>
                <div className="col-sm-12 col-md-6">
                    <span className={`badge-stock float-end ${stockClass}`}>{stockStatus}</span>
                </div>
            </div>
            <img alt="Card" src={book.cover} style={{"width":"200px","height":"200px"}} className="m-2"/>
        </div>
    );
    const footer = (
        <div className="row">
            <div className="col-sm-12 col-md-6">
                <span className="fw-bold float-start">${parseInt(book.price)}<small className="text-muted">.{(book.price+'').replace(/^[-\d]+\./, '')}</small></span>
            </div>
            <div className="col-sm-12 col-md-6">
                <Button label="Add to cart" className="p-button-info p-button-text p-0 float-end" icon="pi pi-shopping-cart" />
            </div>
        </div>
    );
    return(
        
        <div className="col-md-3 p-4">
            <Card title={book.title} subTitle="" footer={footer} header={header}>
                <p className="text-start">{book.description.substring(0,100)}.....</p>
                <Rating value={4} stars={5} cancel={false} className="text-warning" tooltip={3.7}/>
            </Card>
        </div>
    )
}

export default BookItem;