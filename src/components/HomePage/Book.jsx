import React from "react";
import Link from "next/link";
import Image from "next/image";

const Book = ({ book = {} }) => {
  const { id, title, author, image_url, available_quantity, description } =
    book;

  return (
    <div className="group rounded-2xl shadow-md hover:shadow-2xl   overflow-hidden border border-gray-200 transition-all duration-500 ease-in-out cursor-pointer hover:scale-102">
      <div className="relative overflow-hidden">
        <Image
          width={400}
          height={400}
          src={image_url}
          alt={title}
          className="w-full h-56 object-cover  transition duration-500"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-2xl font-semibold text-blue-700 transition">
          {title}
        </h3>

        <p className="text-md">
          by <span className="font-bold text-blue-700">{author}</span>
        </p>

        <p className="text-md line-clamp-2 opacity-80">{description}</p>

        <div className="flex justify-between items-center">
          <span className={`text-xl font-medium`}>
            {available_quantity} copies left
          </span>
        </div>

        <Link href={`/allBooks/${id}`}>
          <button className="w-full cursor-pointer mt-3 py-2 font-medium transition duration-300 rounded-full btn btn-primary">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Book;
