"use client";

import { useEffect,useState } from "react";
import { getBooks } from "../../services/api";
import BookCard from "../../components/BookCard";
import BookForm from "../../components/BookForm";
import FilterBar from "../../components/FilterBar";
import StatsCards from "../../components/StatsCard";

export default function Dashboard(){

 const [books,setBooks]=useState([])
const userId=""
 const fetchBooks = async () => {
    try {
      const data = await getBooks();
      console.log("Books fetched:", data);
      if (data.books) {
        setBooks(data.books);

;      } else {
        setBooks([]);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch books");
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchBooks();
  }, []);

 return(

  <div>

   <h1 className="text-3xl font-bold mb-6">
    My Library
   </h1>

   <StatsCards books={books}/>

   <BookForm refresh={fetchBooks} books={books}/>

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