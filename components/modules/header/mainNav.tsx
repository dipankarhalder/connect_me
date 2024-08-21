import {
  House,
  Users,
  BriefcaseBusiness,
  MessageSquareText,
  Bell,
} from "lucide-react";
import Link from "next/link";

export const MainNav = () => {
  const navigations = [
    { id: 1, title: "Home", icon: <House size={18} /> },
    { id: 2, title: "My Network", icon: <Users size={18} /> },
    { id: 3, title: "Jobs", icon: <BriefcaseBusiness size={18} /> },
    { id: 4, title: "Messaging", icon: <MessageSquareText size={18} /> },
    { id: 5, title: "Notifications", icon: <Bell size={18} /> },
  ];

  return (
    <div className="flex border-b">
      <div className="container mx-auto">
        <div className="flex w-full py-3 justify-between">
          <div className="">
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
          </div>
        </div>
      </div>
    </div>
  );
};
