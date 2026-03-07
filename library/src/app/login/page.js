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

  e.preventDefault()

  const data = await loginUser(form)

  localStorage.setItem("token",data.token)

  router.push("/dashboard")
 }

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
    onChange={(e)=>setForm({...form,email:e.target.value})}
    />

    <input
    type="password"
    placeholder="Password"
    className="border p-2 w-full mb-3"
    onChange={(e)=>setForm({...form,password:e.target.value})}
    />

    <button className="bg-green-600 text-white w-full p-2 rounded">
     Login
    </button>

   </form>

  </div>
 )
}