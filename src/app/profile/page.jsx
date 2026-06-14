"use client";

import Image from "next/image";
import ImageProfile from "@/Assets/user.png";
import { authClient } from "@/lib/auth-client";
import { UpdateUserProfileModal } from "@/components/UpdataUserProfileModal";
import { motion } from "framer-motion";

const MyProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  // console.log(user, "user");

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.15, // Staggers the inner elements
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-20 flex flex-col justify-center bg-slate-200 border border-slate-300 container mx-auto w-[80%] md:w-[50%] lg:w-[40%] h-110 md:h-90 rounded-2xl shadow-xl transition-all duration-300 ease-in-out hover:scale-102"
    >
      <div className="text-center flex flex-col items-center justify-center space-y-4 h-full py-10 px-5">
        
        <motion.div variants={itemVariants}>
          <Image
            src={user?.image || ImageProfile}
            referrerPolicy="no-referrer"
            alt={user?.name || "User Profile"}
            height={150}
            width={150}
            className="mx-auto rounded-full border border-slate-400 shadow-xl select-none object-cover h-[150px] w-[150px]"
          />
        </motion.div>

        <motion.h3 variants={itemVariants} className="text-2xl">
          Name: <span className="font-bold">{user?.name || "N/A"}</span>
        </motion.h3>

        <motion.p variants={itemVariants} className="text-xl text-muted">
          Email: <span className="font-medium">{user?.email || "N/A"}</span>
        </motion.p>

        <motion.div variants={itemVariants} className="mt-2">
          <UpdateUserProfileModal />
        </motion.div>

      </div>
    </motion.div>
  );
};

export default MyProfilePage;