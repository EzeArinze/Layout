import {
  Copy,
  LayoutDashboard,
  LibraryBig,
  LogOut,
  UserRoundPlus,
} from "lucide-react";
import Link from "next/link";

const MyLinks = [
  {
    Title: "Home",
    Sub: {
      link1: "Dashboard",
    },
    Url: "/",
    Icon: LayoutDashboard,
  },
  {
    Title: "Utilities",
    Sub: {
      link1: "Logout",
      link2: "Register",
    },
    Url: "#",
    Icon: [LibraryBig, Copy],
    // Icon2:,
  },
  {
    Title: "Auth",
    Sub: {
      link1: "Logout",
      link2: "Register",
    },
    Url: "#",
    Icon: [LogOut, UserRoundPlus],
  },
  {
    Title: "Extra",
    Sub: {
      link1: "Logout",
      link2: "Register",
    },
    Url: "#",
    Icon: [],
  },
];

function SideBarLinks() {
  return (
    <ul className="flex flex-col gap-2 px-2 py-6">
      {MyLinks.map((link) => (
        <li key={link.Title} className="flex flex-col gap-2">
          <h3 className="font-bold">{link.Title}</h3>
          <span className="flex flex-col ">
            <Link
              href={link.Url}
              className="rounded p-2 text-gray-500 hover:bg-blue-500 hover:text-white transition-colors"
            >
              {link.Sub.link1}
            </Link>

            {!link.Sub.link2 ? null : (
              <Link
                href={link.Url}
                className="rounded p-2 text-gray-500 hover:bg-blue-500 hover:text-white transition-colors"
              >
                <p>{link.Sub.link2}</p>
              </Link>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default SideBarLinks;
