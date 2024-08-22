import { Logo } from "@/components/modules/header/logo";
import { TopSearch } from "@/components/modules/header/topSearch";
import { Navigation } from "@/components/modules/header/navigation";
import { TopButton } from "@/components/modules/header/topButton";
import { TopDropDown } from "@/components/modules/header/topDropDown";

export const Header = () => {
  return (
    <div className="flex w-full flex-col bg-white border-b fixed z-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between w-full py-3">
          <div className="flex items-center">
            <Logo />
            <TopSearch />
          </div>
          <Navigation />
          <div className="flex items-center">
            <TopButton />
            <TopDropDown />
          </div>
        </div>
      </div>
    </div>
  );
};
