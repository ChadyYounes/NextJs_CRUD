"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    await axios.post("http://localhost:3000/api/topics", {
      title,
      description,
    });
    await router.refresh();
    router.push("/");
    setTitle("");
    setDescription("");
  };
  return (
    <form className="flex flex-col gap-3 " onSubmit={handleSubmit}>
      <input
        className="border border-slate-500 py-2 rounded-xl px-8"
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        className="border border-slate-500 py-2 rounded-xl px-8"
        type="text"
        value={description}
        placeholder="Enter Description"
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      {error && (
        <h3 className="text-red-600 font-bold">
          Request Failed! Both Title and Description are required
        </h3>
      )}
      <button className="bg-blue-700 text-white font-bold py-3 px-6 rounded-xl w-fit">
        Add Topic
      </button>
    </form>
  );
}

export default AddTopic;
