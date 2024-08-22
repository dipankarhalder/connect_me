import Link from "next/link";
import {
  House,
  Users,
  BriefcaseBusiness,
  MessageSquareText,
  Bell,
} from "lucide-react";

export const Navigation = () => {
  const navigationsitem = [
    { id: 1, title: "Home", icon: <House size={18} /> },
    { id: 2, title: "Network", icon: <Users size={18} /> },
    { id: 3, title: "Jobs", icon: <BriefcaseBusiness size={18} /> },
    { id: 4, title: "Messaging", icon: <MessageSquareText size={18} /> },
    { id: 5, title: "Notifications", icon: <Bell size={18} /> },
  ];

  return (
    <div className="flex items-center">
      <ul className="flex gap-7">
        {navigationsitem.map((item) => (
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
  );
};
