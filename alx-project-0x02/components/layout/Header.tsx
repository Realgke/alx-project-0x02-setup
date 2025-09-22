import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 p-4 flex justify-between items-center">
      <div className="text-xl font-bold">MyLogo</div>
      <nav className="space-x-4">
        <Link href="/home">
          <a className="px-3 py-1 bg-blue-500 text-white rounded">Home</a>
        </Link>
        <Link href="/about">
          <a className="px-3 py-1 bg-green-500 text-white rounded">About</a>
        </Link>
        <button className="px-3 py-1 bg-gray-500 text-white rounded">
          Sign In
        </button>
        <button className="px-3 py-1 bg-gray-700 text-white rounded">
          Sign Up
        </button>
      </nav>
    </header>
  );
};

export default Header;
