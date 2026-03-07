"use client";

import { useState } from "react";
import { addBook } from "../services/api";
import toast from "react-hot-toast";  // import toast

export default function BookForm({ refresh }) {

  const [form, setForm] = useState({
    title: "",
    author: "",
    tags: "",
    status: "Want to Read"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");  // check login
console.log("token print",token);
    if (!token) {
      toast.error("You must be logged in to add a book!");  // show toast
      return;
    }

    const payload = {
      ...form,
      tags: form.tags.split(",")  // convert to array
    };

    try {
      await addBook(payload);
      toast.success("Book added successfully!");
      refresh();
      setForm({ title: "", author: "", tags: "", status: "Want to Read" }); // reset form
    } catch (err) {
      toast.error("Failed to add book");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 shadow rounded mb-6"
    >
      <div className="grid grid-cols-4 gap-3">
        <input
          value={form.title}
          placeholder="Title"
          className="border p-2"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          value={form.author}
          placeholder="Author"
          className="border p-2"
          onChange={(e) => setForm({ ...form, author: e.target.value })}
        />
        <input
          value={form.tags}
          placeholder="Tags (comma)"
          className="border p-2"
          onChange={(e) => setForm({ ...form, tags: e.target.value })}
        />
        <select
          value={form.status}
          className="border p-2"
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option>Want to Read</option>
          <option>Reading</option>
          <option>Completed</option>
        </select>
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 mt-3 rounded">
        Add Book
      </button>
    </form>
  );
}