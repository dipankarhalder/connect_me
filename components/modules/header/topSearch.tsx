import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const TopSearch = () => {
  return (
    <div className="w-[400px] relative mr-8 relative">
      <Search className="absolute top-2.5 left-2.5 text-slate-300" size={20} />
      <Input
        type="text"
        placeholder="Search..."
        className="pl-10 font-medium text-xs"
      />
      <kbd className="pointer-events-none absolute right-[0.66rem] top-[0.66rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </div>
  );
};
