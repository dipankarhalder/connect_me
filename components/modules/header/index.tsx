import { Logo } from "@/components/modules/header/logo";
import { TopSearch } from "@/components/modules/header/topSearch";
import { DropDown } from "@/components/modules/header/dropDown";
import { MainNav } from "@/components/modules/header/mainNav";

export const Header = () => {
  return (
    <div className="flex w-full flex-col bg-white">
      <div className="flex border-b">
        <div className="container mx-auto">
          <div className="flex w-full py-3 justify-between">
            <div className="flex items-center">
              <Logo />
              <TopSearch />
            </div>
            <DropDown />
          </div>
        </div>
      </div>
      <MainNav />
    </div>
  );
};
