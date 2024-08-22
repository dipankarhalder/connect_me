import { ChevronDown } from "lucide-react";

export const ProButton = () => {
  const btnlink = ["Open to", "Add profile section", "Enhance profile"];

  return (
    <div className="flex flex-col justify-end w-2/4 pr-6">
      <div className="flex gap-2">
        {btnlink.map((item, idx) => (
          <div
            key={`${item}-${idx}`}
            className="flex text-slate-700 pr-3 items-center pl-4 py-2 cursor-pointer transition rounded-md bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700"
          >
            <p className="font-semibold text-sm">{item}</p>{" "}
            <ChevronDown size={16} className="ml-1" />
          </div>
        ))}
      </div>
    </div>
  );
};
