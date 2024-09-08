import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";
const fetchData = async () => {
  try {
    const data = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!data.ok) {
      throw new Error("failed to fetch data");
    }
    const topics = data.json();
    return topics;
  } catch (e) {
    console.log("error loading topics: ", e);
  }
};
const TopicsList = async () => {
  const { topics } = await fetchData();
  return (
    <>
      {topics.map((topic, index) => (
        <div
          key={index}
          className="p-4 border border-slate-300 rounded-xl my-3 flex justify-between gap-5 items-start "
        >
          <div>
            <h2 className="font-bold text-2xl">{topic.title}</h2>
            <div>{topic.description}</div>
          </div>
          <div className="flex gap-2 ">
            <RemoveBtn id={topic._id} />
            <Link href={`/editTopic/${topic._id}`}>
              <HiPencilAlt size={24} className="text-blue-800" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicsList;
