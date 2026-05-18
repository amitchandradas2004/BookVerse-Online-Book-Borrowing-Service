import Book from "@/components/HomePage/Book";

const AllBooksPage = async () => {
  const res = await fetch(
    `https://online-book-borrowing-platform.vercel.app/Books.json`,
  );
  const data = await res.json();
  const allBooks = data.books;
  // console.log(allBooks);

  return (
    <div className="mt-30 container mx-auto px-2 sm:px-0">
      <div className="flex justify-end">
        <form method="GET" className="flex items-center gap-2 w-100">
          <input
            type="text"
            name="search"
            // defaultValue={defaultValue}
            placeholder="Search books by title..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2   focus:ring-blue-700"
          />

          <button
            type="submit"
            className="px-4 cursor-pointer py-2 btn btn-primary rounded-full transition"
          >
            Search
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {allBooks.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default AllBooksPage;
