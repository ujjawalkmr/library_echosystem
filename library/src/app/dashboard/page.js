"use client";

import { useEffect,useState } from "react";
import { getBooks } from "../../services/api";
import BookCard from "../../components/BookCard";
import BookForm from "../../components/BookForm";
import FilterBar from "../../components/FilterBar";
import StatsCards from "../../components/StatsCard";

export default function Dashboard(){

 const [books,setBooks]=useState([])

 const fetchBooks = async(filters={})=>{

  const data = await getBooks(filters)

  setBooks(data.book||[])
 }

 useEffect(()=>{
  fetchBooks()
 },[])

 return(

  <div>

   <h1 className="text-3xl font-bold mb-6">
    My Library
   </h1>

   <StatsCards books={books}/>

   <BookForm refresh={fetchBooks}/>

   <FilterBar onFilter={fetchBooks}/>

   <div className="grid md:grid-cols-3 gap-6 mt-6">

    {books.map(book=>(
     <BookCard
     key={book._id}
     book={book}
     refresh={fetchBooks}
     />
    ))}

   </div>

  </div>
 )
}