import { nunito, robotoslab } from "@/app/layout";
import Link from "next/link";
import logo from "@/Assets/logo.png";
import Image from "next/image";
const Navbar = () => {
  const navlinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/allBooks">All Books</Link>
      </li>
      <li>
        <Link href="/profile">My Profile</Link>
      </li>
    </>
  );
  return (
    <navbar className="bg-base-100 shadow-sm fixed top-0 z-10 w-full">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown inline-block md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow w-40 flex flex-col gap-2"
            >
              {navlinks}
            </ul>
          </div>
          <Link href="/" className="hidden sm:inline-block">
            <span className="flex items-center select-none">
              {" "}
              <Image src={logo} alt="BookVerse" height={45} width={45} />
              <h3 className="{nunito.className} font-bold text-2xl">
                BookVerse
              </h3>
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
        <div className="navbar-end gap-2">
          <Link href="/auth/login">
            <button className="btn btn-soft  btn-primary rounded-full w-20 transition-all duration-500 ease-in-out cursor-pointer hover:-translate-y-0.5">
              Login
            </button>
          </Link>
          <Link href="/auth/register">
            <button className="btn btn-primary rounded-full w-30 transition-all duration-500 ease-in-out cursor-pointer hover:-translate-y-0.5">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;
