import { Album } from "lucide-react";
import Link from "next/link";

export const DropDown = () => {
  return (
    <div className="flex items-center">
      <div className="px-5 py-1.5 border border-amber-400 bg-amber-50 rounded-full mr-4">
        <p className="font-semibold text-xs text-amber-600">
          Activate Premium: 50% off
        </p>
      </div>
      <div className="flex">
        <Link
          href="/"
          className="flex items-center text-slate-700 pr-4 pl-3 py-1.5 rounded-md bg-indigo-50 hover:text-indigo-700"
        >
          <Album size={18} />
          <p className="ml-2 font-semibold text-sm">Post a job</p>
        </Link>
      </div>
    </div>
  );
};
