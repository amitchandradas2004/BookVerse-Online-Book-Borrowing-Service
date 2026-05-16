const getBookDetails = async () => {
  const res = await fetch(
    `https://online-book-borrowing-platform.vercel.app/Books.json`,
  );
  return res.json();
};
export default getBookDetails;
