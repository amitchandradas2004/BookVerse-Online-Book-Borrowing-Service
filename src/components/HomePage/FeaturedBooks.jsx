import Link from "next/link";
import { nunito } from "@/app/layout";
import Book from "@/components/HomePage/Book";
import { FaArrowRightLong, FaRightLong } from "react-icons/fa6";

const FeaturedBooks = async () => {
  const res = await fetch(
    `https://book-verse-online-book-borrowing-se.vercel.app/book.json`,
  );
  const Books = await res.json();
  // console.log(Books);

  const allBooks = Books.books.slice(0, 4);

  return (
    <div className="container mx-auto py-5 px-2 sm:px-0">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-4xl font-bold pb-3">Featured Books</h2>
          <p className="{nunito.className} opacity-80 hidden sm:inline-block">
            Explore popular titles handpicked for readers, students,
            <br /> and literature enthusiasts on BookVerse.
          </p>
        </div>
        <div>
          <Link
            href="/allBooks"
            className="flex items-center gap-2 text-2xl text-blue-700"
          >
            <button className="btn btn-ghost btn-primary rounded-full">
              {" "}
              View all <FaArrowRightLong />
            </button>{" "}
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {allBooks.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
