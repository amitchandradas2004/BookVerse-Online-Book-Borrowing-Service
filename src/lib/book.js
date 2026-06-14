const getBookDetails = async () => {
  const res = await fetch(
    `https://book-verse-online-book-borrowing-se.vercel.app/book.json`,
  );
  return res.json();
};
export default getBookDetails;
// https://online-book-borrowing-platform.vercel.app/Books.json
