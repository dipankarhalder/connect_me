import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Ellipsis,
  Users,
  Album,
  Hotel,
  Coffee,
  BadgePercent,
  ClipboardList,
  MonitorCheck,
  TvMinimalPlay,
} from "lucide-react";
import Link from "next/link";

export const DropDown = () => {
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
    { id: 5, title: "Post a job", icon: <Album size={18} /> },
    {
      id: 6,
      title: "Services Marketplace",
      icon: <Hotel size={18} />,
    },
    {
      id: 7,
      title: "Advertise",
      icon: <MonitorCheck size={18} />,
    },
    {
      id: 8,
      title: "Learning",
      icon: <TvMinimalPlay size={18} />,
    },
  ];

  return (
    <div className="flex items-center">
      <div className="px-5 py-1.5 border border-amber-400 bg-amber-50 rounded-full mr-3">
        <p className="font-semibold text-xs text-amber-600">
          Activate Premium: 50% off
        </p>
      </div>
      <Menubar className="border-0">
        <MenubarMenu>
          <MenubarTrigger className="font-semibold text-xs">
            For More <Ellipsis size={18} className="ml-2" />
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
    </div>
  );
};
