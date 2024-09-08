"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

function RemoveBtn({ id }) {
  const router = useRouter();
  const deleteTopic = async () => {
    await axios.delete(`http://localhost:3000/api/topics?id=${id}`);
    router.refresh();
  };
  return (
    <button onClick={deleteTopic} className="text-red-500">
      <HiOutlineTrash size={24} />
    </button>
  );
}

export default RemoveBtn;
