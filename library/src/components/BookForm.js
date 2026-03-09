"use client";

import { useId, useState, useEffect } from "react";
import { addBook } from "../services/api";
import toast from "react-hot-toast";  // import toast

export default function BookForm({ refresh, books }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    tags: "",
    status: "Want to Read",
    userId: "", // initialize empty
  });

  // Load userId only on client
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userId = localStorage.getItem("userId");
      const id = books[0]?.userId || userId;
      setForm((prev) => ({ ...prev, userId: id }));
    }
  }, [books]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let token;
    if (typeof window !== "undefined") {
      token = localStorage.getItem("token");
    }
    if (!token) {
      toast.error("You must be logged in!");
      return;
    }

    const payload = { ...form, tags: form.tags.split(",").map(t => t.trim()) };
    console.log("payload is :", payload);

    try {
      const res = await addBook(payload);
      console.log("Book added:", res);
      toast.success("Book added successfully!");
      refresh();

      // reset form but keep userId intact from state
      setForm({
        title: "",
        author: "",
        tags: "",
        status: "Want to Read",
        userId: form.userId,
      });
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