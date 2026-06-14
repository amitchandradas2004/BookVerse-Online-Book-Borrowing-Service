"use client";

import BannerImage from "@/Assets/BannerImage.webp";
import Image from "next/image";
import Link from "next/link";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { motion } from "framer-motion";

const Banner = () => {
  // Variants for staggered text animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each text element appearing
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Variant for the image sliding in from the right
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <div className="mt-20 flex flex-col md:flex-row justify-between items-center container mx-auto px-2 md:px-0 overflow-hidden">
      {/* Left Column: Text & Buttons (Animated Container) */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center md:justify-start items-center md:items-start text-center md:text-start mb-5 md:mb-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="group inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-50 backdrop-blur-md border border-white/20 text-black text-sm font-medium shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-500 ease-in-out cursor-pointer"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-700"></span>
          </span>
          <span className="tracking-wide">Explore Thousands of Books</span>
        </motion.div>

        <motion.h3 variants={itemVariants} className="text-4xl font-bold mt-5">
          Find Your Next Read
        </motion.h3>

        <motion.p
          variants={itemVariants}
          className="{nunito.className} opacity-80 py-3"
        >
          BookVerse is a modern digital library platform where readers can
          explore, borrow, and manage books effortlessly. BookVerse creates a
          seamless online reading and borrowing experience.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link href={"/allBooks"}>
            <button className="btn btn-primary rounded-full h-12 w-46 transition-all duration-500 ease-in-out cursor-pointer hover:-translate-y-0.5">
              Browse Books <FaUpRightFromSquare />
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Column: Image (Animated Separately) */}
      <motion.div variants={imageVariants} initial="hidden" animate="visible">
        <Image
          src={BannerImage}
          alt="Image of Banner Image containing a bookshelf"
          height={200}
          width={350}
          className="rounded-xl transition-all duration-300 ease-in-out hover:scale-102 select-none shadow-2xl shadow-gray-400"
        />
      </motion.div>
    </div>
  );
};

export default Banner;
