"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActice = href === pathname;
  return (
    <div>
      <Link
        href={href}
        className={`${isActice ? "btn-primary btn rounded-full h-7 w-full" : "btn btn-ghost btn-primary rounded-full h-7 w-full"}`}
      >
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
