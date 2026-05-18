"use client";
import Image from "next/image";
import ImageProfile from "@/Assets/user.png";
import { authClient } from "@/lib/auth-client";
import { UpdateUserProfileModal } from "@/components/UpdataUserProfileModal";
const MyProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  // console.log(user, "user");

  return (
    <div className="mt-20 flex flex-col justify-center bg-slate-200  border border-slate-300 container mx-auto w-[80%] md:w-[50%] lg:w-[40%] h-110 md:h-90 rounded-2xl shadow-xl transition-all duration-300 ease-in-out hover:scale-102">
      <div className="text-center space-y-3 h-full py-10 px-5">
        <Image
          src={user?.image || ImageProfile}
          referrerPolicy="no-referrer"
          alt={user?.name}
          height={150}
          width={150}
          className="mx-auto rounded-full border border-slate-400 shadow-xl select-none"
        />
        <h3 className="text-2xl">
          Name: <span className="font-bold">{user?.name || "N/A"}</span>
        </h3>
        <p className="text-xl text-muted">
          Email: <span className="font-medium">{user?.email || "N/A"}</span>
        </p>
        <span className="mt-2">
          {" "}
          <UpdateUserProfileModal />
        </span>
      </div>
    </div>
  );
};

export default MyProfilePage;
