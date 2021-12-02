import React,{useEffect, useState} from "react";
import BookItemList from "./BookItemList";


function Container(){
    const [data, setData] = useState({ books: [] });
    useEffect(()=>{
        fetch('api/book/list')
        .then((res)=>res.json())
        .then((result)=>setData(result.data));
    })
    return (
        <div>
            <BookItemList books={data}/>
        </div>
    )
}

export default Container;