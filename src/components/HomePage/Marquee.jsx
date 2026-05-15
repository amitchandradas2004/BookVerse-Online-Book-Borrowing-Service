import Marquee from "react-fast-marquee";
import { FaArrowRightLong } from "react-icons/fa6";
const books = [
  {
    id: 1,
    title: "New Arrivals: Hamlet",
    author: "William Shakespeare",
  },
  {
    id: 2,
    title: "New Arrivals: Macbeth",
    author: "William Shakespeare",
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
  },
  {
    id: 4,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
  },
  {
    id: 5,
    title: "New Arrivals: Wuthering Heights",
    author: "Emily Brontë",
  },
  {
    id: 6,
    title: "Great Expectations",
    author: "Charles Dickens",
  },
  {
    id: 7,
    title: "New Arrivals: Oliver Twist",
    author: "Charles Dickens",
  },
  {
    id: 8,
    title: "The Canterbury Tales",
    author: "Geoffrey Chaucer",
  },
  {
    id: 9,
    title: "Paradise Lost",
    author: "John Milton",
  },
  {
    id: 10,
    title: "New Arrivals: The Waste Land",
    author: "T. S. Eliot",
  },
  {
    id: 11,
    title: "Frankenstein",
    author: "Mary Shelley",
  },
  {
    id: 12,
    title: "New Arrivals: 1984",
    author: "George Orwell",
  },
  {
    id: 13,
    title: "To the Lighthouse",
    author: "Virginia Woolf",
  },
  {
    id: 14,
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
  },
  {
    id: 15,
    title: "New Arrivals: Heart of Darkness",
    author: "Joseph Conrad",
  },
];
const MarqueeLayout = () => {
  return (
    <div className="bg-gray-100 backdrop-blur-lg shadow-md py-5 my-5">
      <Marquee pauseOnHover="true">
        {books.map((book) => (
          <span
            key={book.id}
            className="pl-5 flex items-center gap-2 font-medium"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>

              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-700"></span>
            </span>{" "}
            {book.title} <FaArrowRightLong />
            {book.author}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeLayout;
