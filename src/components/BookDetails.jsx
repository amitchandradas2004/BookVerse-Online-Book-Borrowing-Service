"use client";
import { Button, toast, Toast } from "@heroui/react";
import { Star } from "lucide-react";
import Image from "next/image";

export default function BookDetails({ book = {} }) {
  const {
    title,
    author,
    description,
    image_url,
    available_quantity,
    pages,
    language,
    release_date,
    rating,
    total_reviews,
  } = book;

  return (
    <div className="  p-4 md:p-8 flex justify-center mt-15">
      <div className="container mx-auto w-full rounded-2xl p-5 grid grid-cols-1 md:grid-cols-2 gap-8 border border-gray-200 bg-slate-100">
        <div className="flex flex-col items-center">
          <Image
            width={400}
            height={400}
            src={image_url}
            alt={title}
            className="w-64 md:w-80 h-80 md:h-105 object-cover rounded-xl shadow-xl transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-2xl"
          />
        </div>

        <div className="flex flex-col">
          <div>
            <span
              className={`text-sm px-3 py-1 rounded-full font-medium bg-blue-200 text-blue-700 flex items-center gap-2 w-35 transition-all duration-300 ease-in-out hover:scale-105 border border-blue-300`}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>

                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-700"></span>
              </span>
              <span>{available_quantity} copies left</span>
            </span>

            <h1 className="text-2xl md:text-4xl font-bold mt-3">{title}</h1>

            <p className="text-gray-500 mt-2">
              Written by{" "}
              <span className="font-bold text-blue-700">{author}</span>
            </p>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i <= Math.round(rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <span className="text-sm font-medium text-gray-700">
                {rating} ({total_reviews})
              </span>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-2">About this book</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 text-sm text-center">
              <div className="border border-gray-400 bg-slate-200 rounded-xl p-2 transition-all duration-300 ease-in-out hover:scale-105 shadow-xl">
                <p>PAGES</p>
                <p className="font-bold">{pages}</p>
              </div>
              <div className="border border-gray-400 bg-slate-200 rounded-xl p-2 transition-all duration-300 ease-in-out hover:scale-105 shadow-xl">
                <p>LANGUAGE</p>
                <p className="font-bold">{language}</p>
              </div>
              <div className="border border-gray-400 bg-slate-200 rounded-xl p-2 transition-all duration-300 ease-in-out hover:scale-105 shadow-xl">
                <p>RELEASE</p>
                <p className="font-bold">{release_date}</p>
              </div>
            </div>
            <Toast.Provider />
            <Button
              size="sm"
              variant="secondary"
              onPress={() =>
                toast.success("You have successfully borrowed this book.")
              }
              className="mt-5 border border-blue-400"
            >
              Borrow This Book
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
