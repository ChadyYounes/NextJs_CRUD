import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between rounded-xl items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        Crud
      </Link>
      <Link className="bg-white p-2 font-bold rounded-xl" href={"/addTopic"}>
        Add Topic
      </Link>
    </nav>
  );
}
