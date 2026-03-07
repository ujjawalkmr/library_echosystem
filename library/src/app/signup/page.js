"use client";

import { useState } from "react";
import { signupUser } from "../../services/api";

export default function Signup() {

  const [form,setForm]=useState({
    name:"",
    email:"",
    password:""
  })

  const handleSubmit = async(e)=>{
    e.preventDefault()

    const data = await signupUser(form)

    alert(data.message)
  }

  return(

    <div className="flex justify-center mt-10">

      <form onSubmit={handleSubmit}
      className="bg-white p-6 shadow rounded w-96">

        <h2 className="text-xl font-bold mb-4">
          Signup
        </h2>

        <input
        placeholder="Name"
        className="border p-2 w-full mb-3"
        onChange={(e)=>setForm({...form,name:e.target.value})}
        />

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

        <button className="bg-blue-600 text-white w-full p-2 rounded">
          Signup
        </button>

      </form>

    </div>
  )
}