import "./globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";  // import

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <Navbar />
        <Toaster position="top-right" />  {/* Add this */}
        <main className="max-w-6xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}