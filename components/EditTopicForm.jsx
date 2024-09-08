"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/api/topics/${id}`, {
      title: newTitle,
      description: newDescription,
    });
    router.push("/");
  };
  return (
    <form className="flex flex-col gap-3 " onSubmit={handleSubmit}>
      <input
        className="border border-slate-500 py-2 rounded-xl px-8"
        type="text"
        placeholder="Update Title"
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
      ></input>
      <input
        className="border border-slate-500 py-2 rounded-xl px-8"
        type="text"
        placeholder="Update Description"
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
      ></input>
      <button className="bg-blue-700 text-white font-bold py-3 px-6 rounded-xl w-fit">
        Update Topic
      </button>
    </form>
  );
}

export default EditTopicForm;
