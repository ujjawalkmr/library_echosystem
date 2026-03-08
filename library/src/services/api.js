const API = `${process.env.NEXT_PUBLIC_BASEURL}/api`;
// console.log("base url is :",API)
/* ---------------- AUTH ---------------- */

export const signupUser = async (data) => {
  const res = await fetch(`${API}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const loginUser = async (data) => {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
console.log("commimg data is:",res.json);
  return res.json();
};

/* ---------------- BOOKS ---------------- */

export const getBooks = async (filters = {}) => {
  const token = localStorage.getItem("token");

  const query = new URLSearchParams(filters).toString();

  const res = await fetch(`${API}/books?${query}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};

export const addBook = async (data) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const deleteBook = async (id) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API}/books/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};// src/services/api.js
export const updateBook = async (id, data) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API}/books/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
};