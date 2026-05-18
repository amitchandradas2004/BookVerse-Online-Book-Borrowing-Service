"use client";
import { authClient, signOut } from "@/lib/auth-client";
import Link from "next/link";
 
const NavButtons = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  // console.log(user, isPending);

  return (
    <div>
      {isPending ? (
        <span className="loading loading-spinner text-primary"></span>
      ) : user ? (
        <div className="flex gap-2 items-center">
          <h2 className="text-xs font-medium text-center">{user.name}</h2>

          <button
             onClick={async () => await authClient.signOut()}
            className="btn btn-primary rounded-full w-30 transition-all duration-500 ease-in-out cursor-pointer hover:-translate-y-0.5"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="ml-2">
          <Link href="/login">
            <button className="btn btn-soft  btn-primary rounded-full w-20 transition-all duration-500 ease-in-out cursor-pointer hover:-translate-y-0.5">
              Login
            </button>
          </Link>

          <Link href="/register">
            <button className="btn btn-primary rounded-full w-30 transition-all duration-500 ease-in-out cursor-pointer hover:-translate-y-0.5">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavButtons;
