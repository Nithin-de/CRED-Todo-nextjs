"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTodo({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });
      if (!res.ok) {
        throw new Error("Failed to update topic");
      }
      router.push("/");
      router.refresh();
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col p-3 ">
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          type="text"
          placeholder="Title"
          className="border border-slate-700 mb-2 p-3"
        />
        <input
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          type="text"
          placeholder="Description"
          className="border border-slate-700 mb-2 p-3"
        />

        <button className="bg-blue-700 w-fit p-2 font-bold text-white">
          Edit Todo
        </button>
      </form>
    </>
  );
}
