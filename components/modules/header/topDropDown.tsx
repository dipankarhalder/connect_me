import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Users,
  Ellipsis,
  Hotel,
  Coffee,
  Album,
  BadgePercent,
  ClipboardList,
  MonitorCheck,
  TvMinimalPlay,
} from "lucide-react";

export const TopDropDown = () => {
  const dropdownNav = [
    { id: 1, title: "Sell", icon: <BadgePercent size={18} /> },
    { id: 2, title: "Groups", icon: <Users size={18} /> },
    {
      id: 3,
      title: "Manage Billing",
      icon: <ClipboardList size={18} />,
    },
    {
      id: 4,
      title: "Talent Insights",
      icon: <Coffee size={18} />,
    },
    {
      id: 5,
      title: "Services Marketplace",
      icon: <Hotel size={18} />,
    },
    {
      id: 6,
      title: "Advertise",
      icon: <MonitorCheck size={18} />,
    },
    {
      id: 7,
      title: "Learning",
      icon: <TvMinimalPlay size={18} />,
    },
  ];

  return (
    <Menubar className="p-0 h-auto ml-2">
      <MenubarMenu>
        <MenubarTrigger className="font-semibold text-xs py-2">
          For Business <Ellipsis size={18} className="ml-2" />
        </MenubarTrigger>
        <MenubarContent>
          {dropdownNav.map((item) => (
            <MenubarItem key={item.id} className="p-0">
              <Link
                href=""
                className="flex w-full py-2 px-3 hover:bg-indigo-50 hover:text-indigo-700"
              >
                {item.icon}
                <p className="ml-3 font-medium text-sm">{item.title}</p>
              </Link>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
