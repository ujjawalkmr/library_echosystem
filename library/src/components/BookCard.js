import { deleteBook } from "../services/api";

export default function BookCard({book,refresh}){

 const handleDelete = async()=>{
  await deleteBook(book._id)
  refresh()
 }

 return(

  <div className="bg-white p-4 shadow rounded">

   <h2 className="font-bold text-lg">
    {book.title}
   </h2>

   <p className="text-gray-500">
    {book.author}
   </p>

   <div className="mt-2 flex gap-2">

    {book.tags?.map((tag,i)=>(
     <span
     key={i}
     className="bg-gray-200 px-2 py-1 text-sm rounded">
      {tag}
     </span>
    ))}

   </div>

   <p className="mt-2 text-sm text-blue-600">
    {book.status}
   </p>

   <button
   onClick={handleDelete}
   className="text-red-500 mt-3">
    Delete
   </button>

  </div>
 )
}