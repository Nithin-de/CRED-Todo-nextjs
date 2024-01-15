import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between px-5 py-3 bg-fuchsia-900 items-center rounded-lg">
        <Link href={"/"} className="text-white font-bold">
          Todo App
        </Link>

        <Link
          href={"/AddTodo"}
          className="bg-blue-600 rounded-md p-1 font-bold text-white"
        >
          Add Todo
        </Link>
      </nav>
    </>
  );
}
