"use client";

import { useId, useState } from "react";
import { addBook } from "../services/api";
import toast from "react-hot-toast";  // import toast

export default function BookForm({ refresh, books }) {
  console.log("Books in BookForm:", books); // Debugging line
  const userId = localStorage.getItem("userId");
  // console.log("User ID in BookForm:", books[0]?.userId); // Debugging line
  const id = books[0]?.userId || userId; // Fallback to userId from localStorage or generate a unique ID
  console.log("Using User ID in BookForm:", id); // Debugging line
  const [form, setForm] = useState({
    title: "",
    author: "",
    tags: "",
    status: "Want to Read",
    userId: id
  });
  console.log("uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu", useId);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in!");
      return;
    }

    const payload = { ...form, tags: form.tags.split(",") };
    console.log("payload is :", payload);

    try {
      const res = await addBook(payload);
      console.log("Book added:", res); //
      toast.success("Book added successfully!");
      refresh(); // make sure this triggers fetchBooks
      setForm({ title: "", author: "", tags: "", status: "Want to Read", userId: id }); // reset form
    } catch (err) {
      console.error(err);
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