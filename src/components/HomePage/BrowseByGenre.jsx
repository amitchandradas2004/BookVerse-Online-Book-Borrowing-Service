"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const genres = [
  {
    id: 1,
    title: "Story",
    subtitle: "Fiction, Novels & Fantasy",
    image:
      "https://media.istockphoto.com/id/2223638940/photo/this-is-our-story-symbol-wooden-blocks-with-words-this-is-our-story-business-and-this-is-our.webp?a=1&b=1&s=612x612&w=0&k=20&c=dVhnKA9pL349qjXZbBxdQbFMSCqTf3lkfoVzkiE8QEw=",
  },
  {
    id: 2,
    title: "Tech",
    subtitle: "Coding, AI & Digital Systems",
    image:
      "https://www.womenintech.co.uk/wp-content/uploads/2021/11/Tech-skills-2022-1.png",
  },
  {
    id: 3,
    title: "Science",
    subtitle: "Physics, Biology & Space",
    image: "https://thumbs.dreamstime.com/b/science-lab-chemicals-14262437.jpg",
  },
];

const BrowseByGenre = () => {
  // Variants for the staggered grid animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each card appearing
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-5 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center font-semibold text-gray-800 mb-8 md:text-3xl lg:text-4xl"
        >
          Browse by Genre
        </motion.h2>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the grid is visible
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
        >
          {genres.map((item) => (
            <motion.div
              variants={itemVariants}
              key={item.id}
              className="relative rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
                className="w-full h-40 sm:h-44 md:h-48 object-cover transform group-hover:scale-105 transition duration-500"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 transition duration-500 group-hover:bg-black/50"></div>

              {/* Text */}
              <div className="absolute bottom-3 left-4 text-white">
                <h3 className="text-sm sm:text-base font-semibold">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-200">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrowseByGenre;