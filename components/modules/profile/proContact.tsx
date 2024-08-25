import Link from "next/link";

export const ProContact = ({ profileName }: any) => {
  return (
    <div className="flex flex-col w-2/4">
      <p className="flex items-center text-sm font-medium mb-1 text-sky-600">
        <Link href="/" className="hover:underline">
          https://connectme.com/{profileName}
        </Link>
      </p>
      <h6 className="text-md font-medium text-slate-500 mb-1">
        Karnataka, Bengaluru, India.
      </h6>
      <p className="text-sm font-semibold flex gap-3 text-indigo-700 items-center">
        <Link href="" className="hover:underline">
          513 followers
        </Link>
        <span className="w-[3px] h-[3px] bg-indigo-700 rounded-full"></span>
        <Link href="" className="hover:underline">
          450 connections
        </Link>
        <span className="w-[3px] h-[3px] bg-indigo-700 rounded-full"></span>
        <Link href="" className="hover:underline">
          Contact Info
        </Link>
      </p>
    </div>
  );
};
