"use client";

import Image from "next/image";
import FooterImage from "@/Assets/footerImage.webp";
import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  // Variants for staggered entrance animation when footer is viewed
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Smooth cascade effect across the 4 columns
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer className="bg-[#0f172a] text-white mt-10 border-t border-white/10 overflow-hidden">
      <div className="container mx-auto py-10 px-2 md:px-0">
        {/* Main Footer Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3">
              <Image
                src={FooterImage}
                alt="BookVerse Logo"
                className="w-12 h-12 object-contain"
              />
              <h2 className="text-2xl font-bold">BookVerse</h2>
            </div>
            <p className="mt-4 text-sm text-gray-300 leading-7">
              BookVerse is a modern online book borrowing platform where readers
              can explore, borrow, and manage books easily through a clean and
              responsive interface.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/" className="hover:text-blue-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/allBooks"
                  className="hover:text-blue-500 transition"
                >
                  All Books
                </Link>
              </li>
              <li>
                <Link
                  href="/borrowed-books"
                  className="hover:text-blue-500 transition"
                >
                  Borrowed Books
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-500 transition">
                  About Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-5">Categories</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-blue-500 transition cursor-pointer">
                Story Books
              </li>
              <li className="hover:text-blue-500 transition cursor-pointer">
                English Literature
              </li>
              <li className="hover:text-blue-500 transition cursor-pointer">
                Science Fiction
              </li>
              <li className="hover:text-blue-500 transition cursor-pointer">
                Technology
              </li>
            </ul>
          </motion.div>

          {/* Social & Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-5">Connect With Us</h3>
            <p className="text-gray-300 text-sm leading-7">
              Stay connected with BookVerse for the latest books, updates, and
              reading collections.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition"
                >
                  <FaFacebookF />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-400 transition"
                >
                  <FaInstagram />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gray-700 transition"
                >
                  <FaGithub />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-800 transition"
                >
                  <FaLinkedinIn />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Footer Credits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-gray-400">
            © 2026 BookVerse. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link
              href="/privacy-policy"
              className="hover:text-orange-400 transition"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-orange-400 transition">
              Terms & Conditions
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
