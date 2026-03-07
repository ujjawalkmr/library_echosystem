"use client";

import { useState } from "react";
import { loginUser } from "../../services/api";
import { useRouter } from "next/navigation";

export default function Login(){

 const router = useRouter()

 const [form,setForm]=useState({
  email:"",
  password:""
 })

 const handleSubmit = async(e)=>{
  e.preventDefault();   // MUST be first
  console.log("coming data is: login page");
  
  const data = await loginUser(form);
  console.log("API response:", data);
  
  if (data.token) {
    localStorage.setItem("token", data.token);
    router.push("/dashboard");
  }}

 return(

  <div className="flex justify-center mt-10">

   <form
   onSubmit={handleSubmit}
   className="bg-white p-6 shadow rounded w-96">

    <h2 className="text-xl font-bold mb-4">
     Login
    </h2>

    <input
  placeholder="Email"
  className="border p-2 w-full mb-3"
  value={form.email}   // bind value
  onChange={(e)=>setForm({...form,email:e.target.value})}
/>

   <input
  type="password"
  placeholder="Password"
  className="border p-2 w-full mb-3"
  value={form.password}  // bind value
  onChange={(e)=>setForm({...form,password:e.target.value})}
/>

    <button className="bg-green-600 text-white w-full p-2 rounded" type="submit" onClick={handleSubmit}>
     Login
    </button>

   </form>

  </div>
 )
}