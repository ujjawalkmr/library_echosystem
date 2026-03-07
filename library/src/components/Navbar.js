"use client";

import Link from "next/link";

export default function Navbar() {

  return (
    <nav className="bg-white shadow">

      <div className="max-w-6xl mx-auto flex justify-between p-4">

        <div className="flex gap-2 items-center">
          <span className="text-2xl">📚</span>
          <h1 className="font-bold text-lg">
            Book Manager
          </h1>
        </div>

        <div className="flex gap-6">

          <Link href="/">Home</Link>

          <Link href="/dashboard">Dashboard</Link>

          <Link href="/signup">Signup</Link>

          <Link href="/login">Login</Link>

        </div>

      </div>

    </nav>
  );
}