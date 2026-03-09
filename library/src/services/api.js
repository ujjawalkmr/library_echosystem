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
  console.log("commimg data is:", res.json);
  return res.json();
};

/* ---------------- BOOKS ---------------- */

export const getBooks = async ({ status, tag } = {}) => {
  const token = localStorage.getItem("token");

  // const query = new URLSearchParams();
  // if (status) query.append("status", status);
  // if (tag) query.append("tag", tag);

  let tagsArray = [];
  if (typeof tag === "string") {
    tagsArray = tag.split(",").map(t => t.trim()); // "wrg,qed" → ["wrg","qed"]
  } else if (Array.isArray(tag)) {
    tagsArray = tag;
  }
  if (!status && !tag) {
    const res = await fetch(`${API}/books`, {
      headers: {
        Authorization: `Bearer ${token}`,

      },
    }); return res.json();
  } else {
    const res = await fetch(`${API}/books/filter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,

      }, body: JSON.stringify({
        status: status,  // ensure array
        tags: tagsArray,
      })
    }); return res.json();
  }


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
  console.log("delete response is :", localStorage.getItem("usserId"));
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


export const FilterBook = async (filters = {}) => {
  const token = localStorage.getItem("token");
  console.log("filters in API is :", filters);
  const res = await fetch(`${API}/books/filter${filters}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
