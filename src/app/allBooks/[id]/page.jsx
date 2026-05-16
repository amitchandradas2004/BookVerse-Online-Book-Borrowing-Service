import getBookDetails from "@/lib/book";
import NotFound from "@/app/not-found";
import BookDetails from "@/components/BookDetails";

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id);
  const bookData = await getBookDetails();
  const bookAllData = bookData.books;
  // console.log(bookAllData);
  // const { title } = bookAllData;
  const bookDetails = bookAllData.find((book) => book.id === Number(id));
  if (!bookDetails) {
    return <NotFound />;
  }
  return (
    <div>
      <BookDetails book={bookDetails} />
    </div>
  );
};

export default DetailsPage;
