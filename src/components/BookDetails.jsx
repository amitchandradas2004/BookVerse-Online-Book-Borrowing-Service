import { BookOpen, Laptop, Star } from "lucide-react";
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
    formats,
  } = book;

  return (
    <div className="bg-gray-100 p-4 md:p-8 flex justify-center mt-15">
      <div className="container mx-auto w-full bg-white rounded-2xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT: Book Cover */}
        <div className="flex flex-col items-center">
          <Image
            width={400}
            height={400}
            src={image_url}
            alt={title}
            className="w-64 md:w-80 h-80 md:h-105 object-cover rounded-xl shadow-xl"
          />
        </div>

        {/* RIGHT: Details */}
        <div className="flex flex-col">
          <div>
            {/* Availability */}
            <span
              className={`text-sm px-3 py-1 rounded-full font-medium ${
                available_quantity > 0
                  ? "bg-blue-100 text-blue-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {available_quantity > 0
                ? `${available_quantity} Available`
                : "Out of Stock"}
            </span>

            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-bold mt-3">{title}</h1>

            {/* Author */}
            <p className="text-gray-500 mt-2">
              Written by <span className="font-medium">{author}</span>
            </p>

            {/* Rating */}
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

            {/* About */}
            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-2">About this book</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>

            {/* Meta */}
            <div className="grid grid-cols-3 gap-4 mt-6 text-sm">
              <div>
                <p className="text-gray-400">PAGES</p>
                <p className="font-semibold">{pages}</p>
              </div>
              <div>
                <p className="text-gray-400">LANGUAGE</p>
                <p className="font-semibold">{language}</p>
              </div>
              <div>
                <p className="text-gray-400">RELEASE</p>
                <p className="font-semibold">{release_date}</p>
              </div>
            </div>
          </div>

          {/* Bottom cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {/* Library */}
            <div className="p-4 bg-[#F0ECF9] rounded-xl">
              <BookOpen color="#3525CD" />
              <p className="font-semibold">Library Pickup</p>
              <p className="text-sm text-gray-500">
                Ready for collection in 2 hours.
              </p>
            </div>

            {/* Digital */}
            <div className="p-4 bg-[#F0ECF9] rounded-xl">
              <Laptop color="#00687A" />
              <p className="font-semibold">Digital Access</p>
              <p className="text-sm text-gray-500">
                {formats?.join(", ")} available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
