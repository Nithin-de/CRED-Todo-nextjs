import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function TodoList() {
  const { topic } = await getTopics();

  return (
    <>
      {topic.map((t) => (
        <div
          key={t._id}
          className=" flex justify-between p-5 border border-slate-700 mb-6 items-start"
        >
          <div>
            <h2>{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/EditTodo/${t._id}`}>
              <FaEdit size={23} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
