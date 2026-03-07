"use client";

import { useState } from "react";

export default function FilterBar({onFilter}){

 const [status,setStatus]=useState("")
 const [tag,setTag]=useState("")

 const applyFilter=()=>{
  onFilter({status,tag})
 }

 return(

  <div className="flex gap-3 bg-white p-4 shadow rounded">

   <select
   className="border p-2"
   onChange={(e)=>setStatus(e.target.value)}
   >
    <option value="">All Status</option>
    <option>Want to Read</option>
    <option>Reading</option>
    <option>Completed</option>
   </select>

   <input
   placeholder="Tag"
   className="border p-2"
   onChange={(e)=>setTag(e.target.value)}
   />

   <button
   onClick={applyFilter}
   className="bg-blue-600 text-white px-4 rounded"
   >
    Filter
   </button>

  </div>
 )
}