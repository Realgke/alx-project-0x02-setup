import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex gap-4">
        <Link href="/home" className="hover:text-yellow-300">
          Home
        </Link>
        <Link href="/about" className="hover:text-yellow-300">
          About
        </Link>
        <Link href="/posts" className="hover:text-yellow-300">
          Posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
