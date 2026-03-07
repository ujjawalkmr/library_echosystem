export default function StatsCards({books}){

 const total = books.length
 const reading = books.filter(b=>b.status==="Reading").length
 const completed = books.filter(b=>b.status==="Completed").length

 return(

  <div className="grid grid-cols-3 gap-4 mb-6">

   <div className="bg-white p-4 shadow rounded">
    <p>Total Books</p>
    <h2 className="text-2xl font-bold">{total}</h2>
   </div>

   <div className="bg-white p-4 shadow rounded">
    <p>Reading</p>
    <h2 className="text-2xl font-bold">{reading}</h2>
   </div>

   <div className="bg-white p-4 shadow rounded">
    <p>Completed</p>
    <h2 className="text-2xl font-bold">{completed}</h2>
   </div>

  </div>
 )
}