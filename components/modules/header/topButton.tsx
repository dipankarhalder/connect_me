import Link from "next/link";
import { Album } from "lucide-react";

export const TopButton = () => {
  return (
    <div className="flex mr-2">
      <Link
        href="/"
        className="flex items-center text-slate-700 pr-4 pl-3 py-2 rounded-md bg-indigo-50 transition duration-300 ease-in-out hover:bg-indigo-700 hover:text-white"
      >
        <Album size={18} />
        <p className="ml-2 font-semibold text-sm">Post a job</p>
      </Link>
    </div>
  );
};
