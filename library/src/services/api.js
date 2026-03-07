const API = "http://localhost:5000/api";

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
};