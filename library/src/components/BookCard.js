"use client";

import { useState } from "react";
import { deleteBook, updateBook } from "../services/api"; // updateBook API
import toast from "react-hot-toast";

export default function BookCard({ book, refresh }) {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    title: book.title,
    author: book.author,
    tags: book.tags.join(","), // convert array to comma string
    status: book.status,
  });

  // Delete book
  const handleDelete = async () => {
    await deleteBook(book._id);
    toast.success("Book deleted");
    refresh();
  };

  // Save edited book
  const handleSave = async () => {
    try {
      const payload = {
        title: form.title,
        author: form.author,
        tags: form.tags.split(","),
        status: form.status,
      };
      await updateBook(book._id, payload);
      toast.success("Book updated successfully");
      setIsEditing(false);
      refresh();
    } catch (err) {
      toast.error("Failed to update book");
    }
  };

  return (
    <div className="bg-white p-4 shadow rounded">
      {!isEditing ? (
        <>
          <h2 className="font-bold text-lg">{book.title}</h2>
          <p className="text-gray-500">{book.author}</p>
          <div className="mt-2 flex gap-2">
            {book.tags?.map((tag, i) => (
              <span key={i} className="bg-gray-200 px-2 py-1 text-sm rounded">
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-2 text-sm text-blue-600">{book.status}</p>
          <div className="mt-3 flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="text-green-500"
            >
              Edit
            </button>
            <button onClick={handleDelete} className="text-red-500">
              Delete
            </button>
          </div>
        </>
      ) : (
        <div className="space-y-2">
          <input
            type="text"
            value={form.title}
            placeholder="Title"
            className="border p-2 w-full"
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <input
            type="text"
            value={form.author}
            placeholder="Author"
            className="border p-2 w-full"
            onChange={(e) => setForm({ ...form, author: e.target.value })}
          />
          <input
            type="text"
            value={form.tags}
            placeholder="Tags (comma separated)"
            className="border p-2 w-full"
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
          />
          <select
            value={form.status}
            className="border p-2 w-full"
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option>Want to Read</option>
            <option>Reading</option>
            <option>Completed</option>
          </select>
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}