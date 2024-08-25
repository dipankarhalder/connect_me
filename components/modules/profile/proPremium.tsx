import { Sparkles, X } from "lucide-react";

export const ProPremium = () => {
  return (
    <div className="flex flex-col">
      <div className="py-2 px-3 bg-amber-100 border border-amber-600 rounded-md mb-3">
        <p className="font-semibold text-sm text-amber-700 text-center">
          Activate Premium: 50% + more opportunity
        </p>
      </div>
      <div className="py-2 px-3 bg-amber-50 border border-t-4 border-amber-600 border-t-amber-600 rounded-md relative">
        <span className="absolute top-1.5 right-1.5 cursor-pointer">
          <X size={16} className="text-gray-500" />
        </span>
        <h3 className="font-bold text-amber-700 text-sm mb-2">
          Enhance your profile
        </h3>
        <p className="font-medium text-xs text-slate-700 mb-1">
          Stand out for 2 times more opportunities, with the help of Artificial
          Intelligence.
        </p>
        <div className="flex mt-5 mb-1">
          <div className="flex items-center bg-amber-600 pl-3 cursor-pointer py-1.5 pr-4 text-white rounded">
            <Sparkles size={14} />
            <span className="font-semibold text-sm ml-2">Enhance</span>
          </div>
        </div>
      </div>
    </div>
  );
};
