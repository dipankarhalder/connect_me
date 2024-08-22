import {
  House,
  Users,
  BriefcaseBusiness,
  MessageSquareText,
  Bell,
  Ellipsis,
  Hotel,
  Coffee,
  BadgePercent,
  ClipboardList,
  MonitorCheck,
  TvMinimalPlay,
} from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

export const MainNav = () => {
  const navigations = [
    { id: 1, title: "Home", icon: <House size={18} /> },
    { id: 2, title: "My Network", icon: <Users size={18} /> },
    { id: 3, title: "Jobs", icon: <BriefcaseBusiness size={18} /> },
    { id: 4, title: "Messaging", icon: <MessageSquareText size={18} /> },
    { id: 5, title: "Notifications", icon: <Bell size={18} /> },
  ];

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
    <div className="flex border-b">
      <div className="container mx-auto">
        <div className="flex w-full py-1.5 justify-between items-center">
          <ul className="flex gap-8">
            {navigations.map((item) => (
              <li key={item.id}>
                <Link
                  href="/"
                  className="flex items-center text-slate-700 hover:text-indigo-700"
                >
                  {item.icon}
                  <p className="ml-2 font-semibold text-sm">{item.title}</p>
                </Link>
              </li>
            ))}
          </ul>
          <Menubar className="border-0">
            <MenubarMenu>
              <MenubarTrigger className="font-semibold text-xs">
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
        </div>
      </div>
    </div>
  );
};
