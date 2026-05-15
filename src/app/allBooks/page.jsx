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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {allBooks.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default AllBooksPage;
